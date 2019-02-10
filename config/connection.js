// Used to mask MySQL Creds
let db =  require("./MySQLCredentials.js")

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: db.username,
  password: db.password,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
