const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyAccessToken(req, res, next) {
   
  try {
    console.log("req.headers.authorization", req.headers.authorization);
    const accessToken = req.headers.authorization.split(' ')[1]; // Authorization: Bearer accessToken
    console.log("access", accessToken);
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    console.log(user);
    res.locals.user = user;

    next();
  } catch (error) {
    console.log('Invalid access token');
    res.status(403).send('Invalid access token');
  }
}

module.exports = verifyAccessToken;
