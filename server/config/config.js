require("dotenv").config();
module.exports = {
  port: 5000,
  database: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
  },
};
