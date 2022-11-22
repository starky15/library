import React, {useState} from "react";
import BookEdit from "./BookEdit";

const BookShow = ({book, onDelete, onEdit}) => {
    const [editShow, setEditShow] = useState(false);

    const handleEditClick = () => {
        setEditShow(!editShow)
        console.log(editShow)
    }
    const handleDeleteClick = () =>{
        onDelete(book.id)
    }

    const handleSave = (id, title) => {
        // This is handling both the tasks now
        onEdit(id, title)
        setEditShow(false)
    }
    let content = <h3>{book.book}</h3>
    if (editShow){
        content = <BookEdit book={book} onSave={handleSave}/>
    }

    // to get random images picsum.photos
    return(<div className="book-show">
        <img alt={book.title} src={`https://picsum.photos/seed/${book.id}/200/200`} />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>delete</button>
            <button className="delete" onClick={handleDeleteClick}>delete</button>
        </div>
    </div>
    );
};

export default BookShow;