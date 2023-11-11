const express = require("express");
const postsRoutes = require("./routes/index");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/posts", postsRoutes);

app.listen(PORT, () => console.log(`Port:${PORT}`));
