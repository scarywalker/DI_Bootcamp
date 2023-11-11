const express = require("express");
const postsRoutes = require("./routes/index");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/api/books", postsRoutes);

app.listen(PORT, () => console.log(`Port:${PORT}`));
