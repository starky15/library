import React from "react";
import BookShow from "./BookShow";

const BookList = ({books, onDelete}) => {
    const renderedbooklist = books.map((book) =>{
        return <BookShow key={book.id} book={book} onDelete={onDelete} />
    });
    return(
        <div className="book-list">{renderedbooklist}</div>
    );
};

export default BookList;