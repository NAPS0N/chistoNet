require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtConfig = require('../AuthServer/configs/jwtConfig');

/**
 *
 * @param {User} payload
 * @returns
 */
function generateTokens(payload) {
  return {
    accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, jwtConfig.access),
    refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, jwtConfig.refresh),
  };
}

module.exports = generateTokens;
