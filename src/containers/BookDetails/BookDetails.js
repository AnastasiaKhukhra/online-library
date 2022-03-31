import React from 'react';

import classes from './BookDetails.module.css';

const BookDetails = (props) => {
  return (
    <>
      <h2>{props.book.title}</h2>
      <h4>{props.book.author}</h4>
      <h5>{props.book.releaseDate}</h5>
      <p>{props.book.detailedDescription}</p>
    </>
  );
};

export default BookDetails;
