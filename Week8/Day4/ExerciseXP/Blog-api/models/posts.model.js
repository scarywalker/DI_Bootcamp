const db = require("../config/db.js");

const _getAllPosts = () => {
  return db("posts").select("id", "title", "content").orderBy("id");
};

const _getOnePost = (id) => {
  return db("posts").select("id", "title", "content").where({ id });
};

const _addPost = (title, content) => {
  return db("posts").insert({ title, content }, ["id", "title", "content"]);
};

const _updatePost = (id, title, content) => {
  return db("posts")
    .where({ id })
    .update({ title, content }, ["id", "title", "content"]);
};

const _deletePost = (id) => {
  return db("posts").where({ id }).del();
};

module.exports = {
  _getAllPosts,
  _getOnePost,
  _addPost,
  _updatePost,
  _deletePost,
};
