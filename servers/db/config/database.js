require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.USERNAMEDB,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "test": {
    "username": process.env.USERNAMEDB,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "production": {
    "username": process.env.USERNAMEDB,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  }
}