import React from "react";
import Booklist from "./Booklist";
import "./app.css";
import UseStateExample from "./UseStateExample";
import UseEffectExample from "./UseEffectExample";
import UseEffectFetch from "./UseEffectFetch";

export default function App() {
  return (
    <>
      <Booklist />
      <UseStateExample />
      <UseEffectExample />
      <UseEffectFetch />
    </>
  );
}
