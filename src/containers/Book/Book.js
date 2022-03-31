import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Book.module.css';

const Book = (props) => {
  return (
    <Link to={`/book/${props.id}`}>
      <li className={classes.movie}>
        <h2>{`${props.title}, (${props.author})`}</h2>
        <p>{props.shortDescription}</p>
      </li>
    </Link>
  );
};

export default Book;
