const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {

  if (!req.get('X-Access-Token')) {
    throw new ClientError(401, 'authentication required');
  }
  const token = req.get('X-Access-Token');
  const extractedPayload = jwt.verify(token, process.env.TOKEN_SECRET);
  req.user = extractedPayload;
  next();
}

module.exports = authorizationMiddleware;
