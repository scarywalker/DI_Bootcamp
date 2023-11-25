import React, { useState } from "react";

function UseStateExample() {
  const [title, setTitle] = useState("ramdom title");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  // This always works
  const handleClick2 = () => {
    setTimeout(() => setCount((prevCount) => prevCount + 1), 2000); 
  };
  const clickHandler = () => {
    if (title === "ramdom title") {
      setTitle("Hello People");
    } else {
      setTitle("ramdom title");
    }
  };
  return (
    <>
      <h1>{title}</h1>
      <button type="button" onClick={(e) => clickHandler(e)}>
        change title
      </button>
      <button type="button" onClick={() => handleClick()}>
        Count: {count}
      </button>
      <button type="button" onClick={() => handleClick2()}>
        Count: {count}
      </button>
    </>
  );
}

export default UseStateExample;
