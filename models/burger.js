var orm = require("../config/orm.js");

var burger = {
  getAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  createNew: function(columns, values, cb) {
    orm.insertOne("burgers", columns, values, function(res) {
      cb(res);
    });
  },
  devour: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
  // orm.insertOne("");
  // orm.updateOne();
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;