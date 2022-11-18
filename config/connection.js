const mysql = require("mysql");
require('dotenv').config();

var mysqlConnection = mysql.createConnection(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    user: "root",
    password:'Hh1998711.',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = mysqlConnection;