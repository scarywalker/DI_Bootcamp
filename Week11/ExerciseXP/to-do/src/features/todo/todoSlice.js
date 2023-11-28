// todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Test Todo 1",
      done: false,
      day: 1,
    },
    {
      id: 2,
      text: "Test Todo 2",
      done: false,
      day: 2,
    },
    {
      id: 3,
      text: "Test Todo 3",
      done: false,
      day: 3,
    },
    {
      id: 4,
      text: "Test Todo 4",
      done: false,
      day: 1,
    },
    {
      id: 5,
      text: "Test Todo 5",
      done: false,
      day: 2,
    },
    {
      id: 6,
      text: "Test Todo 6",
      done: false,
      day: 3,
    },
    {
      id: 7,
      text: "Test Todo 7",
      done: false,
      day: 1,
    },
    {
      id: 8,
      text: "Test Todo 8",
      done: false,
      day: 2,
    },
    {
      id: 9,
      text: "Test Todo 9",
      done: false,
      day: 3,
    },
    {
      id: 10,
      text: "Test Todo 10",
      done: false,
      day: 1,
    },
  ],
  selectedDay: 1,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { text, day } = action.payload;
      const todo = {
        id: nanoid(),
        text,
        done: false,
        day,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateDone: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
      console.log(state.todos);
    },
    updateSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateDone, updateSelectedDay } =
  todoSlice.actions;

export default todoSlice.reducer;
