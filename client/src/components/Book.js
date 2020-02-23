import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";

function Book({
  id,
  title,
  author,
  thumbnail,
  price,
  contents,
  publisher,
  datetime
}) {
  return (
    <li key={id}>
      <div className="book">
        <Link
          to={{
            pathname: `/book/${id}`,
            state: {
              id,
              title,
              author,
              thumbnail,
              price,
              contents
            }
          }}
        >
          <img src={thumbnail} alt={title}></img>
        </Link>
        <div className="book__content">
          <h4>{title}</h4>
          <span>{author.join()}</span>
          <span> | {publisher}</span>
          <span>
            {" "}
            | {datetime.getFullYear()}년 {datetime.getMonth()}월
          </span>
          <h5>{price.toLocaleString()}원</h5>
        </div>
      </div>
    </li>
  );
}

// Book.propTypes = {
//   id: PropTypes.number.isRequired,
//   year: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   poster: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired
// };

export default Book;
