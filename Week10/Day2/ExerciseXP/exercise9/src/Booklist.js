import React from "react";
import Book from "./Book";

const books = [
  {
    title: "Title1",
    author: "Author1",
    imagesrc: "https://placehold.jp/150x150.png",
  },
  {
    title: "Title2",
    author: "Author2",
    imagesrc: "https://placehold.jp/150x150.png",
  },
  {
    title: "Title3",
    author: "Author3",
    imagesrc: "https://placehold.jp/150x150.png",
  },
  {
    title: "Title4",
    author: "Author4",
    imagesrc: "https://placehold.jp/150x150.png",
  },
  {
    title: "Title5",
    author: "Author5",
    imagesrc: "https://placehold.jp/150x150.png",
  },
];

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book, i) => {
        return <Book {...book} key={i} />;
      })}
    </section>
  );
};

export default Booklist;
