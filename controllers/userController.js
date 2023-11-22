
const User = require('../models/user');
const {StatusCodes} = require('http-status-codes');
const {checkPermissions} = require('../utils');

const getAllUsers = async (req,res)=>{
    
    const users = await User.find({role:'user'}).select('-password');

    res.status(StatusCodes.OK).json({users})
}

const getSingleUser = async (req,res)=>{
    res.send('get single user')
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