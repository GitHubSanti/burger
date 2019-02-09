var express = require("express");
var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burger.js");

// Straight from ORM
var orm = require("../config/orm.js");

router.get("/", function(req, res) {
  burger.getAll(function(data) {
    var hbsObject = {
      allBurgers: data
    };
    res.render("index", hbsObject);
  });

  // orm.selectAll("burgers", function(data) {
  // 	console.log("from orm.js file");
  // 	console.log(data);
  // 	var hbsObject = {
  // 		allBurgers: data
  // 	};
  // 	res.render("index", hbsObject);
  // });
});

router.post("/api/burgers", function(req, res) {
  burger.createNew(
    ["burger_name", "devoured"],
    [req.body.burgerName, 0],
    function(data) {
      // If succeeded return id of item created
      res.json(data.insertId);
    }
  );
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.devour(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});
// Export routes for server.js to use.
module.exports = router;
