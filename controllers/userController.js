const User = require('../models/user');
const CustomError = require('../errors');
const {StatusCodes} = require('http-status-codes');
const {
    createTokenUser,
    attachCookiesToResponse,
    checkPermissions,
  } = require('../utils');

const getAllUsers = async (req,res)=>{
    
    const users = await User.find({role:'user'}).select('-password');

    res.status(StatusCodes.OK).json({users})
}

const getSingleUser = async (req,res)=>{
    const user = await User.findOne({_id:req.params.id}).select('-password');
    if(!user){
        throw new CustomError.NotFoundError(`No user with id : ${req.params.id}`)
    }
    checkPermissions(req.user, user._id);
    res.status(StatusCodes.OK).json({user});
}

const updateUser = async (req,res)=>{
    const {email, name} = req.body;
    if(!email || !name){
        throw new CustomError.BadRequestError('Please provide all values');
    }

    const user = await User.findOne({_id:req.user.userId});
    user.name = name;
    user.email = email;
    await user.save();

    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({res, user:tokenUser});
    res.status(StatusCodes.OK).json({user:tokenUser});
}

const updateUserPassword = async (req,res)=>{
    const {oldPassword, newPassword} = req.body;
    if(!oldPassword || !newPassword){
        throw new CustomError.BadRequestError('Please provide both old and new password!')
    }
    const user = await User.findOne({_id:req.user.userId});
    const isPasswordCorrect = await user.comparePassword(oldPassword);
    if(!isPasswordCorrect){
        throw new CustomError.UnauthenticatedError('Invalid Credentials');
    }
    user.password = newPassword;
    await user.save();

    res.status(StatusCodes.OK).json({msg: 'Success! Password Updated.'})
}
const showMe = async (req,res)=>{
    res.status(StatusCodes).json({user:req.user});
}

module.exports = {getAllUsers, getSingleUser, updateUser, updateUserPassword, showMe}