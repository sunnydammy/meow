import React from "react";
import { Link } from "react-router-dom";

function Book({key, title, author, thumbnail, price}){
    return (
        <div className="book" key={key}>
        <Link
          to={{
            pathname: `/book/${key}`,
            state: {
                key,
              title,
              author,
              thumbnail,
              price
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
        </div>
    );
}

export default Book;