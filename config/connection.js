// Used to mask MySQL Creds
require("dotenv").config();
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_SECRET,
    database: "burgers_db"
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  console.log(connection.config.user);
  console.log(connection.config.password);
  console.log(connection.config.port);
});

module.exports = connection;
