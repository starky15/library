import React, {useState} from "react";

const BookCreate = ({onCreate}) => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit was saved")
        onCreate(title)
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