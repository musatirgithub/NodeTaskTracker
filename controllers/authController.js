const User = require('../models/user');
const Token = require('../models/token');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const crypto = require('crypto');
const {now} = require('mongoose');
const {attachCookiesToResponse, createTokenUser, sendVerificationEmail, sendResetPasswordEmail, createHash} = require('../utils');

const register = async (req,res)=>{
    const {name, email, password} = req.body;

    const emailAlreadyExists = await User.findOne({email});
    if(emailAlreadyExists){
        throw new CustomError.BadRequestError('Email already exists')
    };

    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? 'admin' : 'user';

    const verificationToken = crypto.randomBytes(40).toString('hex');

    const user = await User.create({name, email, password, role, verificationToken})

    const origin = 'http://localhost:3000';

    await sendVerificationEmail({name:user.name, email:user.email, verificationToken:user.verificationToken, origin})

    res.status(StatusCodes.CREATED).json({msg:'Success! Please check your email to verify account'})
}

const verifyEmail = async (req,res)=>{
    const {email, verificationToken} = req.body;
    const user = await User.findOne({email});

    if(!user){
        throw new CustomError.UnauthenticatedError('Verification failed')
    }

    if(verificationToken !== user.verificationToken){
        throw new CustomError.UnauthenticatedError('Verification failed')
    }

    user.isVerified = true;
    user.verified = Date.now();
    user.verificationToken='';

    await user.save();

    res.status(StatusCodes.OK).json({msg:'Email verified'});
}

const login = async (req,res)=>{
    const {email, password} = req.body;
    if(!user || !password){
        throw new CustomError.BadRequestError('Please provide email and password')
    }
    
    const user = await User.findOne({email});
    if(!user){
        throw new CustomError.UnauthenticatedError('Invalid credentials');
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new CustomError.UnauthenticatedError('invalid credentials');
    }

    if(!user.isVerified){
        throw new CustomError.UnauthenticatedError('Please verify your email');
    }

    const tokenUser = createTokenUser(user);

    let refreshToken = '';

    const existingToken = await Token.findOne({user:user._id})
    if(existingToken){
        const {isValid} = existingToken;
        if(!isValid){
            throw new CustomError.UnauthenticatedError('invalid credentials')
        }
        refreshToken = existingToken.refreshToken;
        attachCookiesToResponse({res, user:tokenUser, refreshToken});
        res.status(StatusCodes.OK).json({user:tokenUser})
        return;
    }

    refreshToken = crypto.randomBytes(40).toString('hex');
    const userAgent = req.headers['user-agent'];
    const ip = req.ip;
    const userToken = {refreshToken, userAgent, ip, user:user._id}
    await Token.create(userToken);

    attachCookiesToResponse({res, user:tokenUser, refreshToken});

    res.status(StatusCodes.OK).json({user:tokenUser})
}

const logout = async (req,res)=>{
    await Token.findOneAndDelete({user:req.user.userId});

    res.cookie('accessToken', 'logout', {
        httpOnly:true,
        expires:new Date(Date.now()),
    });

    res.cookie('refreshToken', 'logout', {
        httpOnly:true,
        expires: new Date(Date.now()),
    });

    res.status(StatusCodes.OK).json({msg:'User logged out!'})
}

const forgotPassword = async (req,res)=>{
    res.send('forgotPassword controller')
}

const resetPassword = async (req,res)=>{
    res.send('resetPassword controller')
}

module.exports = {register, login, logout, verifyEmail, forgotPassword, resetPassword}