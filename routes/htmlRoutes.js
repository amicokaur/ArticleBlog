var db = require("./../models");
module.exports = function(app) {
   
    app.get("/", function(req, res) {
        // Grab every document in the Articles collection
        db.Article.find({})
          .then(function(dbArticle) {
            // If we were able to successfully find Articles, send them back to the client
         var data = {
             articles: dbArticle
         }
        
            res.render("index",data)
          })
          .catch(function(err) {
            console.log("hitting error")
            // If an error occurred, send it to the client
            res.json(err);

          });
      });
}