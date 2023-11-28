import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addHandler}>
      <input
        type="text"
        placeholder="enter todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="Submit">Add</button>
    </form>
  );
}

export default AddTodo;
