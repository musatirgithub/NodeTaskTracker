const User = require('../models/user');
const CustomError = require('../errors');
const {StatusCodes} = require('http-status-codes');
const {checkPermissions} = require('../utils');

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
    res.send('update user')
}
const updateUserPassword = async (req,res)=>{
    res.send('update user password')
}
const showMe = async (req,res)=>{

    res.send('show current user')
}

module.exports = {getAllUsers, getSingleUser, updateUser, updateUserPassword, showMe}