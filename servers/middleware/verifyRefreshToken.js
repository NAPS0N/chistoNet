const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.join("../.env") });

function verifyRefreshToken(req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    res.locals.user = user;

    next();
  } catch (error) {
    console.log('Invalid refresh token');
    res.status(403).clearCookie('refreshToken');
  }
}

module.exports = verifyRefreshToken;
