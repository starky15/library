import React from "react";

const BookShow = ({book, onDelete}) => {
    const handleClick = () =>{
        onDelete(book.id)
    }
    return(<div className="book-show">
        <div>{book.book}</div>
        <div className="actions">
            <button className="delete" onClick={handleClick}>delete</button>
        </div>
    </div>
    );
};

export default BookShow;