import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [value, setValue] = useState(0);
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => setSize(window.innerWidth);

  useEffect(() => {
    document.title = `New Messages(${value})`;
  }, [value]);

  useEffect(() => {
    console.log("effect");
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  });

  return (
    <>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>click me</button>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
}

export default UseEffectExample;
