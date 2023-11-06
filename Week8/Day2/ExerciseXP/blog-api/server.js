const express = require("express");
const app = express();
const port = 3000;

let data = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the first blog post.",
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
  },
];

app.use(express.json());

app.get("/posts", (req, res) => {
  res.json(data);
});

app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = data.find((item) => item.id === postId);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Blog post not found" });
  }
});

app.post("/posts", (req, res) => {
  const newPost = req.body;
  data.push(newPost);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const updatedPost = req.body;
  const index = data.findIndex((item) => item.id === postId);

  if (index !== -1) {
    data[index] = { id: postId, ...updatedPost };
    res.json(data[index]);
  } else {
    res.status(404).json({ error: "Blog post not found" });
  }
});

app.delete("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const index = data.findIndex((item) => item.id === postId);

  if (index !== -1) {
    data.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Blog post not found" });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
