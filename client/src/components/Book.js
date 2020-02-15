import React from "react";

function Book({key, title, author, thumbnail, price}){
    return (
        <li className="book" key={key}>
            <div>
                <h3>{title}</h3>
                <h5>{author.join()}</h5>
                <img src={thumbnail} alt={title}></img>
                <h5>{price.toLocaleString()}원</h5>
            </div>
        </li>
    );
}

export default Book;