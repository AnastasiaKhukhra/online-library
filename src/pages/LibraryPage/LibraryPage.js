import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import BooksList from '../../containers/BooksList/BooksLlist'
import classes from './LibraryPage.module.css';

const LibraryPage = (props) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://appointment-records-default-rtdb.firebaseio.com/appointments.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedBooks = [];

      for (const key in data) {
        loadedBooks.push({
          id: key,
          title: data[key].title,
          shortDescription: data[key].shortDescription,
          detailedDescription: data[key].detailedDescription,
          releaseDate: data[key].releaseDate,
          author: data[key].author,
        });
      }

      setBooks(loadedBooks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  let content = <p>Found no movies.</p>;

  if (books.length > 0) {
    content = <BooksList books={books} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className={classes.main}>
      <Link to='/'>
        <button type='button'>X</button>
      </Link>
      <h1>Books List</h1>
      <div>
        <button onClick={fetchBooksHandler}>See all available books</button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default LibraryPage;
