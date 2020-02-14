import React from "react";

function Book({item}){
    return (
        <li className="book">
            <span>{item}</span>
        </li>
    );
}

export default Book;