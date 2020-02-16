import React from "react";
import { Link } from "react-router-dom";

function Book({ id, title, author, thumbnail, price, contents }) {
  return (
    <li className="book" key={id}>
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
        <div>
          <h3>{title}</h3>
          <h5>{author.join()}</h5>
          <img src={thumbnail} alt={title}></img>
          <h5>{price.toLocaleString()}원</h5>
        </div>
      </Link>
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
