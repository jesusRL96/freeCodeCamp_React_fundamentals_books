import React from "react";

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  // console.log(props);
  // Events
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img
        src={img}
        alt=""
        onMouseOver={() => {
          console.log(author);
        }}
      />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
        {/* use arrow function when arguments are needed */}
      </button>
    </article>
  );
};

export default Book;
