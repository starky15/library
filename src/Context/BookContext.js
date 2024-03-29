import {createContext, useState, useCallback} from 'react';
import axios from 'axios';

const BookContext = createContext();

function Provider({children}){
   
    const [books, setBooks] = useState([])

    // to fetch books via API
        //callback is used to prevent error by ESLint for useEffect cyclic rerenders

    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    },[])
    
    // to add books via API
    const createBook = async (book) => {
        const response = await axios.post("http://localhost:3001/books/", {book});
        setBooks([...books, response.data])
    }
    // to add books {without using API}
    // const createBook = (book) => {
    //     console.log(book)
    //     const id = Math.round(Math.random()*123)
    //     setBooks([...books, {id,book}])
    // }


    //to edit books via API
    
    const editBookById = async (id, newTitle) => {
        // console.log(`{http://localhost:3001/books/${id}}`)
        const response = await axios.put(`http://localhost:3001/books/${id}`, {book:newTitle})
        const updatededite_books = books.map((book) =>{
            if (book.id === id){
                return {...book, ...response.data};
            }; 
            return book;
            }
        );
        setBooks(updatededite_books);
        // console.log(response)
    }
    
    //to edit books
    // const editBookById =(id, newTitle) => {
    //     const updatededite_books = books.map((book) =>{
    //         if (book.id === id){
    //             return {...book, book:newTitle};
    //         }; 
    //         return book;
    //         }
    //     );
    //     setBooks(updatededite_books);
    // }

    // to delete books via API
    const deleteBookById = async(id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`)
        console.log(response)
        const updated_books = books.filter((book) =>{
                    return book.id !== id; 
                    }
                );
                setBooks(updated_books);
    }

    // to delete books
    // const deleteBookById =(id) => {
    //     const updated_books = books.filter((book) =>{
    //         return book.id !== id; 
    //         }
    //     );
    //     setBooks(updated_books);
    // }
    // console.log(books)
    const valueToReturn = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    }
    return(
        <BookContext.Provider value={valueToReturn}>
            {children}
        </BookContext.Provider>
    );
    
};


export {Provider}
export default BookContext;