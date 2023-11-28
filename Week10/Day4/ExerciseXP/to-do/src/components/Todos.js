import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateDone } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div>
          <input
            type="checkbox"
            onChange={() => dispatch(updateDone(todo.id))}
          />
          <span key={todo.id}>{todo.text}</span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
