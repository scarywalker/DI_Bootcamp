import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateDone } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const day = useSelector((state) => state.todoReducer.selectedDay);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map(
        (todo) =>
          todo.day == day && (
            <div key={todo.id}>
              <input
                type="checkbox"
                onChange={() => dispatch(updateDone(todo.id))}
              />
              <span>{todo.text}</span>
              <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </div>
          )
      )}
    </div>
  );
}

export default Todos;
