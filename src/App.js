import React, {useState} from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
// NOTE: TODO
// books state, containing all the books
//createbook, editbook, deletebook function

const App = () => {
    const [books, setBooks] = useState([])
    
    // to add books
    const createBook = (book) => {
        console.log(book)
        const id = Math.round(Math.random()*123)
        setBooks([...books, {id,book}])
    }

    //to edit books
    const editBookById =(id, newTitle) => {
        const updatededite_books = books.map((book) =>{
            if (book.id === id){
                return {...book, book:newTitle};
            }; 
            return book;
            }
        );
        setBooks(updatededite_books);
    }
    // to delete books
    const deleteBookById =(id) => {
        const updated_books = books.filter((book) =>{
            return book.id !== id; 
            }
        );
        setBooks(updated_books);
    }
    console.log(books)
    return (<div className='app'>
        <h1>Reading List</h1>
        <BookList books={books}  onDelete={deleteBookById} onEdit={editBookById}/>
        <BookCreate onCreate={createBook}/>
    </div>);
};

export default App;