import React from "react";
import data from "../data/data1.json";

function PostList() {
  console.log(data);
  return (
    <>
      <h1>Hi This is a Title</h1>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default PostList;
