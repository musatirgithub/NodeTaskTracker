

const getAllUsers = async (req,res)=>{
    res.send('get all users')
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