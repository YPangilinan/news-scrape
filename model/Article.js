//article model based off Artcile.js from Scraping-with-mongoose activity
var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

//schema constructor to add to mongo DB
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
     headline: {
        type: String,
        required: true
    },
    summaryOne: {
        type: String,
        required: true
    },
    link: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type:String,
        required:true
    },
    saved: {
        type: Boolean,
        default: false
    },
    note: []
});

ArticleSchema.plugin(uniqueValidator);

//creates the model
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
