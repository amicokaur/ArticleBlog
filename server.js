var express = require("express");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var axios = require("axios");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// Require all models
var db = require("./models");
var exphbs = require("express-handlebars")
app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/week18Populater", { useNewUrlParser: true });


// Hook mongojs configuration to the db variable


// Main route (simple Hello World Message)


// Retrieve data from the db
app.get("/all", function(req, res) {
  // Find all results from the scrapedData collection in the db
  db.scrapedData.find({}, function(error, found) {
    // Throw any errors to the console
    if (error) {
      console.log(error);
    }
    // If there are no errors, send the data to the browser as json
    else {
      res.json(found);
    }
  });
});
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
   
// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
