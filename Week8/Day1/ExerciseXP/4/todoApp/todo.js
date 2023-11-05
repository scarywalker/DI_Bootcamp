class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({ task, complete: false });
    }
  
    markAsComplete(task) {
      const foundTask = this.tasks.find((t) => t.task === task);
      if (foundTask) {
        foundTask.complete = true;
      }
    }
  
    listTasks() {
      return this.tasks;
    }
  }
  
export default TodoList;
  