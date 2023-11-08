const express = require('express');
const router = express.Router();


const todos = [{
  "id": 1,
  "task": "peel potatos",
  "completed": false
},{
  "id": 2,
  "task": "boil potatos",
  "completed": false
},{
  "id": 3,
  "task": "bake potatos",
  "completed": false
}];

router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const updatedTodo = req.body;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'To-do item not found' });
  }

  todos[todoIndex] = updatedTodo;
  res.json(updatedTodo);
});

router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'To-do item not found' });
  }

  const deletedTodo = todos.splice(todoIndex, 1);
  res.json(deletedTodo[0]);
});

module.exports = router;
