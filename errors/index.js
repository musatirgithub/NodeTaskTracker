const CustomAPIError = require('./custom-api');
const BadRequest = require('./bad-request');
const NotFound = require('./not-found');
const UnauthenticatedError = require('./unauthenticated');
const UnauthorizedError = require('./unauthorized');

module.exports = {CustomAPIError, BadRequest, NotFound, UnauthenticatedError, UnauthorizedError}