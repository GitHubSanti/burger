var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput,cb) {
      var queryString = "SELECT burger_name FROM ??";
      connection.query(queryString, [tableInput],function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(whatToSelect, table, orderCol) {
      var queryString = "INSERT INTO (??, ??) VALUES (?,?)";
      console.log(queryString);
      connection.query(queryString, [column1, column2, value1, value2], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
      var queryString =
        "UPDATE ?? SET devoured = 1";
  
      connection.query(
        queryString,
        [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;