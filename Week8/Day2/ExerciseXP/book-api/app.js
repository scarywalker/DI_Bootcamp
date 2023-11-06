const express = require("express");
const app = express();
const port = 5000;

let books = [
  { id: 1, title: "Book 1", author: "Author 1", publishedYear: 2020 },
  { id: 2, title: "Book 2", author: "Author 2", publishedYear: 2021 },
  { id: 3, title: "Book 3", author: "Author 3", publishedYear: 2022 },
];

app.use(express.json());

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find((b) => b.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
