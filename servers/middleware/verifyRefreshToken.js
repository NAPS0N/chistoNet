const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyRefreshToken(req, res, next) {
    const { refreshToken } = req.cookies;
    const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    res.locals.user = user;

    next();
 
}

module.exports = verifyRefreshToken;
