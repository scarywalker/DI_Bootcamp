// AddTodo.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateSelectedDay } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const selectedDay = useSelector((state) => state.todoReducer.selectedDay); // Use Redux state
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text: input, day: selectedDay }));
    setInput("");
  };

  const handleSelectChange = (e) => {
    dispatch(updateSelectedDay(e.target.value));
  };

  return (
    <form onSubmit={addHandler}>
      <select value={selectedDay} onChange={handleSelectChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input
        type="text"
        placeholder="enter todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
