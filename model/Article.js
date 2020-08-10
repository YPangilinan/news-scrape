//article model based off Artcile.js from Scraping-with-mongoose activity
var mongoose = require("mongoose");

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
        required: true
    },
    saved: {
        type: Boolean,
        default: false
    },
    //note object stores Note id
    //ref links the ObjectId to the Note Model
    //will let us use the populate method for the Article and the associated Note
    note: []
});

//creates the model
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;


// {
//     type: Schema.Types.ObjectId,
//     ref: "Note"
// }