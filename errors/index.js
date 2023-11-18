const CustomError = require('./custom-api');
const BadRequest = require('./bad-request');
const NotFound = require('./not-found');
const UnauthenticatedError = require('./unauthenticated');
const UnauthorizedError = require('./unauthorized');

module.exports = {CustomError, BadRequest, NotFound, UnauthenticatedError, UnauthorizedError}