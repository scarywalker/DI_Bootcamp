import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.text, completion: false },
      ];
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case "TOGGLE_COMPLETION":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completion: !todo.completion } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_FILTER":
      return state.map((todo) =>
        action.filter === "all"
          ? { ...todo, display: true }
          : action.filter === "done"
          ? { ...todo, display: todo.completion }
          : { ...todo, display: !todo.completion }
      );
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [editText, setEditText] = useState("");
  const [editedTodoId, setEditedTodoId] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleEditTodo = () => {
    if (editText.trim() === "") return;
    dispatch({ type: "EDIT_TODO", text: editText, id: editedTodoId });
    setEditedTodoId(null);
    setEditText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleToggleCompletion = (id) => {
    dispatch({ type: "TOGGLE_COMPLETION", id });
  };

  const handleFilter = () => {
    dispatch({ type: "TOGGLE_FILTER", filter });
    setFilter((prevFilter) =>
      prevFilter === "all" ? "done" : prevFilter === "done" ? "todo" : "all"
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <h2>Filter:</h2>
      <button onClick={handleFilter}>{filter}</button>

      <ul>
        {todos.map(
          (todo) =>
            todo.display && (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completion}
                  onChange={() => handleToggleCompletion(todo.id)}
                />
                {editedTodoId === todo.id ? (
                  <>
                    <input
                      type="text"
                      placeholder="Edit todo"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={handleEditTodo}>Save</button>
                  </>
                ) : (
                  <>
                    <span
                      style={{
                        textDecoration: todo.completion
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {todo.text}
                    </span>
                    <button onClick={() => handleRemoveTodo(todo.id)}>
                      Remove
                    </button>
                    <button onClick={() => setEditedTodoId(todo.id)}>
                      Edit
                    </button>
                  </>
                )}
              </li>
            )
        )}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
