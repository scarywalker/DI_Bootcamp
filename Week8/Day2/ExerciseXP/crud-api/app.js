const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const { fetchPosts } = require('./data/dataService');

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
    console.log('Data successfully retrieved and sent as a response.');
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});