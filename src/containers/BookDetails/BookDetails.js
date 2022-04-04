import React from 'react';
import { Box, Card } from '@mui/material';
import defaultImage from '../../images/book.jpg';
import { useStyles } from './BookDetails.styles.js';

const BookDetails = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      {props.book.image &&
        <img
          src={'http://localhost:8080/' + props.book.image}
          alt={props.book.image}
          className={styles.image}
        />
      }
      {!props.book.image &&
        <img src={defaultImage} alt='Book' className={styles.image} />
      }
      <Card className={styles.description}>
        <h2>{props.book.title}</h2>
        <h4>{props.book.author}</h4>
        <h5>{props.book.releaseDate}</h5>
        <p>{props.book.detailedDescription}</p>
      </Card>
    </Box>
  );
};

export default BookDetails;
