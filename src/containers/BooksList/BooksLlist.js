import React from 'react';
import { List } from '@mui/material';

import Book from '../Book/Book';

const BooksList = (props) => {

  return (
    <List>
      {props.books.map((book) => (
        <Book
          id={book._id}
          key={book._id}
          title={book.title}
          image={book.image}
          shortDescription={book.shortDescription}
          detailedDescription={book.detailedDescription}
          releaseDate={book.releaseDate}
          author={book.author}
          onDelete={props.onDelete.bind(this, book._id)}
        />
      ))}
    </List>
  );
};

export default BooksList;
