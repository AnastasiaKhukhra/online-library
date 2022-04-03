import React from 'react';

import Book from '../Book/Book';

const BooksList = (props) => {

  return (
    <ul>
      {props.books.map((book) => (
        <Book
          id={book.id}
          key={book.id}
          title={book.title}
          imgURL={book.imgURL}
          shortDescription={book.shortDescription}
          detailedDescription={book.detailedDescription}
          releaseDate={book.releaseDate}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default BooksList;
