import React, { useEffect, useContext} from 'react';
import BookContext from './Context/BookContext';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';

// NOTE: TODO
// books state, containing all the books
//createbook, editbook, deletebook function

const App = () => {
    const {fetchBooks} = useContext(BookContext);

    // to fetch books only once on render of page
    useEffect(() =>{
        fetchBooks()
    },[fetchBooks]);

    return (<div className='app'>
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>);
};

export default App;