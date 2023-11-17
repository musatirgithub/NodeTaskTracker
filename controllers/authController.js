

const register = async (req,res)=>{
    res('register controller')
}
const login = async (req,res)=>{
    res('login controller')
}
const logout = async (req,res)=>{
    res('logout controller')
}
const verifyEmail = async (req,res)=>{
    res('verifyEmail controller')
}
const forgotPassword = async (req,res)=>{
    res('forgotPassword controller')
}
const resetPassword = async (req,res)=>{
    res('resetPassword controller')
}

module.exports = {register, login, logout, verifyEmail, forgotPassword, resetPassword}