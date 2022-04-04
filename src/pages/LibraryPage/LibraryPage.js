import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import translations from '../../common/translations';
import BooksList from '../../containers/BooksList/BooksLlist';
import defaultImage from '../../images/book.jpg';
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
        let image = booksData[key].image ? 'http://localhost:8080/' + booksData[key].image : defaultImage
        loadedBooks.push({
          _id: booksData[key]._id,
          title: booksData[key].title,
          image: image,
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

  async function deleteBookHandler(bookId) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8080/books/book/' + bookId, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      console.log(data);
      setBooks(prevState => {
        const updatedBooks = prevState.filter(b => b._id !== bookId);
        return updatedBooks;
      })
    }
    catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  let content = <p>{translations.library.noBooks}</p>;

  if (books.length > 0) {
    content = <BooksList books={books} onDelete={deleteBookHandler} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>{translations.library.loading}</p>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1>{translations.library.booksList}</h1>
        <div>{content}</div>
        <div className={styles.buttons}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button variant='contained' style={{
              borderRadius: 19,
              backgroundColor: '#00cca3',
              padding: '10px 20px',
              fontSize: '14px',
              width: '250px',
              marginRight: '10px',
            }}>
              {translations.buttons.mainPage}
            </Button>
          </Link>
          <Link to='/addbook' style={{ textDecoration: 'none' }}>
            <Button variant='contained' style={{
              borderRadius: 19,
              backgroundColor: '#00cca3',
              padding: '10px 20px',
              fontSize: '14px',
              width: '250px'
            }}>
              {translations.buttons.addBook}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LibraryPage;
