const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const router = require("./routes/index");

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
