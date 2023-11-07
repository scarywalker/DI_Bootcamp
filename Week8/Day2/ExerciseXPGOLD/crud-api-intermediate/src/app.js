const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let posts = [];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  res.json(post);
});

app.post('/api/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    body: req.body.body,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});
