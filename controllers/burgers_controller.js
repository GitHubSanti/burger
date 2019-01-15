// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var express = require("express");
var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burger.js");

// Straight from ORM
var orm = require("../config/orm.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            allBurgers: data
        };        
        console.log("From model.js file");
        console.log(data);
        // res.render("index", hbsObject);
    });

    orm.selectAll("burgers", function(data) {
        console.log("from orm.js file");
        console.log(data);
        var hbsObject = {
            allBurgers: data
        };
        res.render("index", hbsObject);
    });
});

// Export routes for server.js to use.
module.exports = router;