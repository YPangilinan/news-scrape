var express = require("express");
var logger = require("morgan");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./model");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set('index', __dirname + '/views');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoscraper2";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
var results = [];

//api routes

app.get("/", function(req,res){
    db.Article.find({saved : false}).then(result => {
        res.render('index', {
            result: result.map(result => result.toJSON())
        })
    })
});

app.get("/scrape", function(req,res){
    axios.get("https://www.npr.org/").then(function (response) {
        var $ = cheerio.load(response.data)
        $(".story-text").each(function (i, element) {
            var headline = $(this).find(".title").text();
            var link = $(this).find(".title").parent().attr("href");
            var summary = $(this).find(".teaser").text();

            if (headline && summary && link) {
                results.push({
                    headline: headline,
                    summaryOne: summary,
                    link: link
                })
            }
        });
        db.Article.create(results)
            .then(function (dbArticle) {
                res.render("index", { dbArticle });
                console.log(dbArticle);
            })
            .catch(function (err) {
                console.log(err);
            })
        app.get("/", function (req, res) {
            res.render("index")
        })
    })
});


app.put("/update/:id", function (req, res) {
    db.Article.updateOne({ _id: req.params.id }, { $set: { saved: true } }, function (err, result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

app.put("/unsave/:id", function(req, res) {
    console.log(req.body)
    db.Article.updateOne({ _id: req.params.id }, { $set: { saved: false }}, function(err, result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})
// Route for grabbing a specific Article by id, populate it with it's note
app.get("/newnote/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Article.findOne({ _id: req.params.id })
      // ..and populate all of the notes associated with it
      .populate("note")
      .then(function(dbArticle) {
        // If we were able to successfully find an Article with the given id, send it back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

app.post("/newnote/:id", function(req, res) {
    // console.log(req.body)
    // console.log(req.body._id);
    // console.log(req.body.note);
    db.Note.create(req.body)
    .then(function(dbNote) {
      // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      console.log(dbNote.note);
      return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
    .then(function(dbArticle) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
})

app.get("/saved", function (req, res) {
    var savedArticles = [];
    db.Article.find({saved : true}).then(saved => {
        savedArticles.push(saved);
        res.render('saved', {
            saved: saved.map(saved => saved.toJSON())
        })
    })
})


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
