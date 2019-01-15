// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var express = require("express");
var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        allBurgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

// Export routes for server.js to use.
module.exports = router;  