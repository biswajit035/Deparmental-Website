import React from "react";
import { GiWhiteBook } from "react-icons/gi";

const LibraryCard = ({title, author, category}) => {
  return (
    <div className="card-main">
      <div
        className="book-icon"
        style={{ fontSize: "4rem", color: "rgb(64, 62, 62)" }}
      >
        <GiWhiteBook />
      </div>
      <div className="book-details">
        <div className="book-name">
          <b>{title}</b>
        </div>
        <div className="book-author">
          <p style={{ marginBottom: "0px" }}>{author}</p>
        </div>
        <div className="book-author">
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
