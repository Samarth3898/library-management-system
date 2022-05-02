const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { BookModel } = require("./Books/Library");

// const schema = joi.object({
//   author: Joi.string().min(3).max(30).required().messages({
//     "any.required":"author should be provided";
//   })
//   title: Joi.string().min(3).max(30).required().messages({
//     "any.required":"title should be provided";
//   })
//   ISBN: Joi.string().min(3).max(30).required().messages({
//     "any.required":"ISBN should be provided";
//   })
// })

// router.get("/", (req, res, next) => {
//   res.status(200).send("all books have been returned");
// });

router.get("/", async (req, res, next) => {
  try {
    // add some query author: title - Ghost || all data
    let condition = {};
    // if(req.query){
    //   condition = {
    //     ...condition,
    //     someMore,
    //   }
    // }
    const books = await BookModel.find(condition);
    const resBooks = books.map((book) => {
      return {
        author: book.author,
        title: book.title,
        isbn: book.isbn,
        id: book._id.toString()
      };
    });
    res.status(200).send(resBooks);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const book = await BookModel.create(req.body);
    res.status(201).send({
      author: book.author,
      title: book.title,
      isbn: book.isbn,
      id: book._id.toString()
    });
  } catch (err) {
    next(err);
  }

  // const { author, title, ISBN } = req.body;
  // if (!ISBN) {
  //   //next(new Error("isbn should be there"));
  //   res.status(400).send({ message: "ISBN should be provided" });
  // } else {
  //   if (!author) {
  //     res.status(400).send({ message: "author should be provided" });
  //   } else {
  //     if (!title) {
  //       res.status(400).send({ message: "title should be provided" });
  //     } else {
  //       res.status(200).send(req.body);
  //     }
  //   }
  // }
});

// router.put("/:bookID", (req, res, next) => {});

module.exports = router;
