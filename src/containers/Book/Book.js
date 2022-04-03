import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';

import './Book.module.css';
// import Image from '../Image/Image'

const Book = (props) => {
  return (
    <>
      <div className="single-post__image">
        {/* <Image contain={false} imgURL={props.imgURL} /> */}
        <img src={props.imgURL} alt={props.imgURL} />
      </div>
      <Link to={`/book/${props.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <Card>
          {/* <div>{props.imgURL}</div> */}
          <h2>{`${props.title}, (${props.author})`}</h2>
          <p>{props.shortDescription}</p>
        </Card>
      </Link>
    </>
  );
};

export default Book;
