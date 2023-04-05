import React from "react";
import BookShow from "./BookShow";
import { useContext } from "react";
import BookContext from "../Context/BookContext";

const BookList = () => {
    const {books} = useContext(BookContext)

    const renderedbooklist = books.map((book) =>{
        return <BookShow key={book.id} book={book}/>
    });


    return(
        <div>

            <div className="book-list">{renderedbooklist}</div>
        </div>
    );
};

export default BookList;