const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.join("../.env") });

function verifyAccessToken(req, res, next) {
  try {
    const accessToken = req.headers.authorization.split(" ")[1]; // Authorization: Bearer accessToken
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user;

    next();
  } catch (error) {
    console.log("Invalid access token in verifyAccessToken,js", error);
    res.status(403).send("Invalid access token");
  }
}

module.exports = verifyAccessToken;
