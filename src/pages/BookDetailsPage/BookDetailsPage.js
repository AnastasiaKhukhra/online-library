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
      let currentBook = loadedBooks.find((book) => book.id === params.id);
      setBook(currentBook);
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
      {!book && !error && !isLoading && <p>Found no movies.</p>}
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
