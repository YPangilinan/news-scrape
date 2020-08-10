//note model based off of Note.Js from scraping-with-mongoose activity

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    body: String
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;