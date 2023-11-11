const {
  _getAllBooks,
  _getOneBook,
  _addBook,
  _updateBook,
  _deleteBook,
} = require("../models/Books.model.js");

const getBooks = async (req, res) => {
  try {
    const data = await _getAllBooks();
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getBookId = async (req, res) => {
  console.log("params=>", req.params);
  const { id } = req.params;

  try {
    const data = await _getOneBook(id);
    if (data.length === 0)
      return res.status(404).json({ msg: "No Book Found" });
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const addBook = async (req, res) => {
  console.log("body=>", req.body);
  const { title, content } = req.body;
  try {
    await _addBook(title, content);
    getBooks(req, res);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    await _deleteBook(id);
    getBooks(req, res);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    await _updateBook(id, title, content);
    getBooks(req, res);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = {
  getBooks,
  getBookId,
  addBook,
  deleteBook,
  updateBook,
};
