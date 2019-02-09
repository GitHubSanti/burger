$(document).ready(function() {
  // To create new burger to be devoured
  $("#addBurger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burgerName: $("#newBurger")
        .val()
        .trim()
    };

    if (newBurger.burgerName !== "") {
      // Send the POST request if Add Burger field is not empty
      $.post("/api/burgers", newBurger, function(data, status) {
        if (status) location.reload();
      });
    } else {
      alert("Please provide a value!");
    }
  });

  $(".devourBurger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let id = $(this).attr("id");
    console.log(id);
    var eatBurger = {
      devoured: 1
    };
    console.log(eatBurger);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatBurger
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
