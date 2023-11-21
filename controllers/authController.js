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
    res.send('login controller')
}

const logout = async (req,res)=>{
    res.send('logout controller')
}

const forgotPassword = async (req,res)=>{
    res.send('forgotPassword controller')
}

const resetPassword = async (req,res)=>{
    res.send('resetPassword controller')
}

module.exports = {register, login, logout, verifyEmail, forgotPassword, resetPassword}