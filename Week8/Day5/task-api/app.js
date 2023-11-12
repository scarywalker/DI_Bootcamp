const express = require("express");
const tasksRouter = require("./tasksRouter");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
