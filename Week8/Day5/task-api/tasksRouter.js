const express = require("express");
const fs = require("fs/promises");

const tasksRouter = express.Router();

tasksRouter.use(async (req, res, next) => {
  try {
    const data = await fs.readFile("tasks.json", "utf-8");
    req.tasks = JSON.parse(data);
    next();
  } catch (error) {
    console.error("Error reading tasks file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

tasksRouter.get("/", (req, res) => {
  res.json(req.tasks);
});

tasksRouter.get("/:id", (req, res) => {
  const taskId = req.params.id;
  const task = req.tasks.find((t) => t.id === taskId);
  if (!task) {
    res.status(404).json({ error: "Task not found" });
  } else {
    res.json(task);
  }
});

tasksRouter.post("/", (req, res) => {
  const newTask = req.body;
  req.tasks.push(newTask);

  fs.writeFile("tasks.json", JSON.stringify(req.tasks, null, 2))
    .then(() => res.json(newTask))
    .catch((error) => {
      console.error("Error writing tasks file:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

tasksRouter.put("/:id", (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;

  const index = req.tasks.findIndex((t) => t.id === taskId);

  if (index === -1) {
    res.status(404).json({ error: "Task not found" });
  } else {
    req.tasks[index] = { ...req.tasks[index], ...updatedTask };

    fs.writeFile("tasks.json", JSON.stringify(req.tasks, null, 2))
      .then(() => res.json(req.tasks[index]))
      .catch((error) => {
        console.error("Error writing tasks file:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  }
});

tasksRouter.delete("/:id", (req, res) => {
  const taskId = req.params.id;
  const index = req.tasks.findIndex((t) => t.id === taskId);

  if (index === -1) {
    res.status(404).json({ error: "Task not found" });
  } else {
    const deletedTask = req.tasks.splice(index, 1)[0];

    fs.writeFile("tasks.json", JSON.stringify(req.tasks, null, 2))
      .then(() => res.json(deletedTask))
      .catch((error) => {
        console.error("Error writing tasks file:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  }
});

module.exports = tasksRouter;
