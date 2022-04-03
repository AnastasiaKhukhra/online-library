import React from 'react';

const BookDetails = (props) => {
  return (
    <>
      <div>{props.book.imgURL}</div>
      <h2>{props.book.title}</h2>
      <h4>{props.book.author}</h4>
      <h5>{props.book.releaseDate}</h5>
      <p>{props.book.detailedDescription}</p>
    </>
  );
};

export default BookDetails;
