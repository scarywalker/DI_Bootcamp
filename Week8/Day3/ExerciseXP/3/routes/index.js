const express = require("express");
const router = express.Router();

const books = [
  {
    id: 1,
    title: "Harry Potter",
  },
  {
    id: 2,
    title: "Lord Of The Rings",
  },
];

router.get("/", (req, res) => {
  res.json(books);
});

router.post("/", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ error: "To-do item not found" });
  }

  books[bookIndex] = updatedBook;
  res.json(updatedBook);
});

router.delete("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ error: "To-do item not found" });
  }

  const deletedBook = books.splice(bookIndex, 1);
  res.json(deletedBook[0]);
});

module.exports = router;
