const db = require("../config/db.js");

const _getAllBooks = () => {
  return db("books").select("*").orderBy("id");
};

const _getOneBook = (id) => {
  return db("books").select("id", "title", "author", "published_year").where({ id });
};

const _addBook = (title, author, published_year) => {
  return db("books").insert({ title, author, published_year }, ["id", "title", "author", "published_year"]);
};

const _updateBook = (id, title, author, published_year) => {
  return db("books")
    .where({ id })
    .update({ title, author, published_year }, ["id", "title", "author", "published_year"]);
};

const _deleteBook = (id) => {
  return db("books").where({ id }).del();
};

module.exports = {
  _getAllBooks,
  _getOneBook,
  _addBook,
  _updateBook,
  _deleteBook,
};
