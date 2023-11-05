import TodoList from './todo.js';

const todoList = new TodoList();

todoList.addTask('Buy groceries');
todoList.addTask('Read a book');
todoList.addTask('Finish the project');

console.log('Tasks after adding:');
console.log(todoList.listTasks());

todoList.markAsComplete('Read a book');

console.log('Tasks after marking "Read a book" as complete:');
console.log(todoList.listTasks());
