import React from 'react';

import Book from '../Book/Book';
import classes from './BooksList.module.css';

const MovieList = (props) => {

  return (
    <ul>
      {props.books.map((book) => (
        <Book
          id={book.id}
          key={book.id}
          title={book.title}
          shortDescription={book.shortDescription}
          detailedDescription={book.detailedDescription}
          releaseDate={book.releaseDate}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default MovieList;
