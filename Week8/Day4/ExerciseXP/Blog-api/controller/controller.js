// const pool = require("../config/db");
// const {
//   _getAllPosts,
//   _getOnePost,
//   _addPost,
//   _updatePost,
//   _deletePost,
// } = require("../models/posts.model.js");

// const getPosts = async (req, res) => {
//   try {
//     const data = await _getAllPosts();
//     res.json(data);
//   } catch (e) {
//     console.log(e);
//     res.status(404).json({ msg: "No Posts" });
//   }
// };

// const getPostId = async (req, res) => {
//   console.log("params=>", req.params);
//   const { id } = req.params;

//   try {
//     const data = await _getOnePost(id);
//     if (data.length === 0)
//       return res.status(404).json({ msg: "No Product Found" });
//     res.json(data);
//   } catch (e) {
//     console.log(e);
//     res.status(404).json({ msg: "No Product Found" });
//   }
// };

// const addPost = async (req, res) => {
//   console.log("body=>", req.body);
//   const { title, content } = req.body;
//   try {
//     const data = await _addPost(title, content);
//     getPosts(req, res);
//   } catch (e) {
//     console.log(e);
//     res.status(404).json({ msg: "Can not add post" });
//   }
// };

// const deletePost = (req, res) => {
//   const { id } = req.params;
//   const indx = products.findIndex((item) => item.id == id);
//   if (indx === -1) return res.sendStatus(404);
//   const deleted = products.splice(indx, 1);
//   res.sendStatus(201);
// };

// const updatePost = (req, res) => {
//   const { id } = req.params;
//   const { name, price } = req.body;
//   const indx = products.findIndex((item) => item.id == id);
//   if (indx === -1) return res.sendStatus(404);
//   products[indx] = { ...products[indx], name: name, price: price };
//   res.json(products);
// };

// module.exports = {
//   getPosts,
//   getPostId,
//   addPost,
//   deletePost,
//   updatePost,
// };

const pool = require("../config/db");
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
