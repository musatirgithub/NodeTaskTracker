

const register = async (req,res)=>{
    res.send('register controller')
}
const login = async (req,res)=>{
    res.send('login controller')
}
const logout = async (req,res)=>{
    res.send('logout controller')
}
const verifyEmail = async (req,res)=>{
    res.send('verifyEmail controller')
}
const forgotPassword = async (req,res)=>{
    res.send('forgotPassword controller')
}
const resetPassword = async (req,res)=>{
    res.send('resetPassword controller')
}

module.exports = {register, login, logout, verifyEmail, forgotPassword, resetPassword}