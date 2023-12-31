const {
  _getAllPosts,
  _getOnePost,
  _addPost,
  _updatePost,
  _deletePost,
} = require("../models/posts.model.js");

const getPosts = async (req, res) => {
  try {
    const data = await _getAllPosts();
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getPostId = async (req, res) => {
  console.log("params=>", req.params);
  const { id } = req.params;

  try {
    const data = await _getOnePost(id);
    if (data.length === 0)
      return res.status(404).json({ msg: "No Post Found" });
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const addPost = async (req, res) => {
  console.log("body=>", req.body);
  const { title, content } = req.body;
  try {
    await _addPost(title, content);
    getPosts(req, res);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await _deletePost(id);
    getPosts(req, res);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    await _updatePost(id, title, content);
    getPosts(req, res);
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = {
  getPosts,
  getPostId,
  addPost,
  deletePost,
  updatePost,
};
