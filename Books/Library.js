const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  author: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true
  },
  isbn: {
    type: String,
    unique: true,
    required: true
  }
});

const BookModel = mongoose.model("books", bookSchema);

// const authorSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   dob: {
//     type: Date
//   }
// });

// const AuthorModel = mongoose.model("authors", authorSchema);

// const titleSchema = new mongoose.Schema({
//   name: {
//     type: string,
//     required: true,
//     minlength: 3,
//     maxlength: 30
//   },
//   language: {
//     type: string,
//     required: true
//   },
//   genre: {
//     type: string,
//     required: true
//   }
// });

// const TitleModel = mongoose.model("titles", titleSchema);

module.exports = { BookModel };
