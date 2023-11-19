const {createJWT, isTokenValid, attachCookiesToResponse} = require('./jwt');
const checkPermissions = require('./checkPermissions');
const createTokenUser = require('./createTokenUser');
const sendResetPasswordEmail = require('./sendResetPasswordEmail');
const sendVerificationEmail = require('./sendVerificationEmail');

module.exports = {createJWT, isTokenValid, attachCookiesToResponse, checkPermissions, createTokenUser, sendResetPasswordEmail, sendVerificationEmail}