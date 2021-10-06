import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

import { books } from "./books";
import Book from "./Book";
import { greeting } from "./testing/testing";

function ListOfBooks() {
  console.log(greeting);
  return (
    <React.Fragment>
      <div className="booklist">
        {/*className instead of class*/}
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </div>
    </React.Fragment>
  );
}

ReactDOM.render(<ListOfBooks />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
