// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) { 
            cb(res);
        });
    }
    // orm.insertOne("");
    // orm.updateOne();
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;

