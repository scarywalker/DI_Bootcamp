import React from "react";

const Book = ({ title, imagesrc, author }) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert(author);
  };
  return (
    <article className="book">
      <img src={imagesrc} alt="" />
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button type="button" onClick={() => alert("Hello World")}>
        Hello World
      </button>
      <button type="button" onClick={(e) => clickHandler(e)}>
        Hello World2
      </button>
    </article>
  );
};

export default Book;
