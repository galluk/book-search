const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String },
  description: String,
  image: String,
  link: String,
});

const Book = mongoose.model("GoogleBook", bookSchema);

module.exports = Book;