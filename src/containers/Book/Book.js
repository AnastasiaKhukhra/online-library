import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Card, ListItem } from '@mui/material';
import translations from '../../common/translations';
import { useStyles } from './Book.styles';

const Book = (props) => {
  const styles = useStyles();

  return (
    <ListItem>
      <Card className={styles.root}>
        <Link to={`/book/${props.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <Box className={styles.container}>
            <img src={props.image} alt={props.image} className={styles.image} />
            <Box className={styles.description}>
              <h2>{`${props.title}, (${props.author})`}</h2>
              <p>{props.shortDescription}</p>
            </Box>
          </Box>
        </Link>
        <Box className={styles.button}>
          <Button
            variant='outlined'
            style={{
              borderRadius: 19,
              padding: '10px 20px',
              fontSize: '14px',
            }}
            onClick={props.onDelete}
          >
            {translations.buttons.delete}
          </Button>
        </Box>
      </Card>
    </ListItem>
  );
};

export default Book;
