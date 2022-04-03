import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import BookDetails from '../../containers/BookDetails/BookDetails';
// import classes from './BookDetailsPage.module.css';

const BookDetailsPage = (props) => {
  const params = useParams();
  const [book, setBook] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8080/books/book/' + params.id);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const bookData = data.book;
      setBook(bookData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  return (
    <>
      {!book && !error && !isLoading && <p>Found no books.</p>}
      {book && <BookDetails book={book} />}
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      <Link to='/library'>
        <button type='button'>Back to list</button>
      </Link>
    </>
  );
};

export default BookDetailsPage;
