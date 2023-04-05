import React, {useContext, useState} from "react";
import BookContext from "../Context/BookContext";

const BookCreate = () => {
    const {createBook} = useContext(BookContext);
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit was saved")
        createBook(title)
        setTitle('')
    }

    return(
        <div className="book-create">
            <h3>Add a book!</h3>
            <form>
                <label>Title: </label>
                <input className="input" value={title} type='text' onChange={handleChange} />
                <button className="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default BookCreate;