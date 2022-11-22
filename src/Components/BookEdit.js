import React from "react";
import {useState} from 'react';

const BookEdit = ({book, onSave}) => {

    const [currentTitle, setCurrentTitle] = useState(book.book)
    

    const handleChange =(e)=> {
        console.log(e.target.value)
        setCurrentTitle(e.target.value)
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
        console.log(currentTitle)
        // onEdit(book.id, currentTitle)
        //onSave(false) // Wrong way

        // correct way is to pass onEdit data to a handler in book show, which will handle both the tasks
        onSave(book.id, currentTitle)
    }

    return(
        <div>
            <form className="book-edit" onSubmit={handleSubmit}>
                <label>Title:</label>
                <input onChange={handleChange} value={currentTitle} / >
                <button className="button is-primary">Save</button>
            </form>
        </div>
    );
};

export default BookEdit;