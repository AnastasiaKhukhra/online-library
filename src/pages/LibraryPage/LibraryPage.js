import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import BooksList from '../../containers/BooksList/BooksLlist';
import AddBook from '../../containers/AddBook/AddBook';
import { Button } from '@mui/material';
import { useStyles } from './LibraryPage.styles';

const LibraryPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const styles = useStyles();

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8080/books/books');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const booksData = data.books;
      const loadedBooks = [];
      for (const key in booksData) {
        loadedBooks.push({
          id: booksData[key]._id,
          title: booksData[key].title,
          imgURL: 'http://localhost:8080/' + booksData[key].imgURL,
          shortDescription: booksData[key].shortDescription,
          detailedDescription: booksData[key].detailedDescription,
          releaseDate: booksData[key].releaseDate,
          author: booksData[key].author,
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

  let content = <p>Found no books.</p>;

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
    <div className={styles.root}>
      <div className={styles.container}>
        <h1>Books List</h1>
        <div>{content}</div>
        <div>
          <Button onClick={fetchBooksHandler}
            variant='contained' style={{
              borderRadius: 35,
              backgroundColor: "#00cca3",
              padding: "10px 20px",
              fontSize: "14px",
              width: "250px"
            }}>See all available books</Button>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button variant='contained' style={{
              borderRadius: 35,
              backgroundColor: "#00cca3",
              padding: "10px 20px",
              fontSize: "14px",
              width: "250px"
            }}>Go to main page</Button>
          </Link>
        </div>
        <AddBook />
      </div>
    </div>
  );
}

export default LibraryPage;
