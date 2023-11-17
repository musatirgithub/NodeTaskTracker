const express = require('express');
const router = express.Router()
const {register, login, logout, verifyEmail, forgotPassword, resetPassword} = require('../controllers/authController');

router.post('/register', register)



module.exports = router;