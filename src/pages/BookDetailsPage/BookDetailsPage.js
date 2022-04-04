import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import translations from '../../common/translations';
import BookDetails from '../../containers/BookDetails/BookDetails';
import { useStyles } from './BookDetailsPage.styles.js';

const BookDetailsPage = (props) => {
  const params = useParams();
  const [book, setBook] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const styles = useStyles();

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
  }, [params.id]);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  return (
    <Box className={styles.root}>
      <Box className={styles.container}>
        {!book && !error && !isLoading && <p>{translations.library.noBooks}</p>}
        {book && <BookDetails book={book} />}
        {error && <p>{error}</p>}
        {isLoading && <p>{translations.library.loading}</p>}
        <Link to='/library' style={{ textDecoration: 'none' }}>
          <Button variant='contained'
            style={{
              borderRadius: 35,
              backgroundColor: '#c68c53',
              padding: '10px 20px',
              marginBottom: '15px',
              fontSize: '14px'
            }}>
            Back to list
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default BookDetailsPage;
