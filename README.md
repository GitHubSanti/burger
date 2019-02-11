# Eat-Da-Burger! Overview
Simple app designed with MVC ideology and homemade ORM. This app was also created to increase my proficency with the templating engine, Handlebars.js. Eat-Da-Burger allows users to add new burgers to the screen and to devour them.

Found within the [db folder](https://github.com/GitHubSanti/burger/tree/master/db) of this github repo you'll find the sql scripts used to create the database (burger_db), table (burgers), and the initial data used to populate the burgers table. The first burgers created from the seeds.sql script are a cheeseburger, a grilled chicken burger, and a veggie burger. These initial burgers have the value of 0 for the devoured column, indicating they have not been devoured. This column will be modified to 1 once a user selects the corresponding 'Devour it!' button for that burger.

## Technologies/CDNs utilized
* Handlebars.js
* Node.js
* Express.js
* MySQL
* Bootstrap
* jQuery
* Google Awesome Font
* Basscss

### [Eat-Da-Burger! Heroku Deployed App Link](https://mighty-temple-83436.herokuapp.com/)