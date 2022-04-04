import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import translations from '../../common/translations';
import { useStyles } from './HomePage.styles';

const HomePage = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Box className={styles.container}>
        <h2 className={styles.title}>{translations.home.header}</h2>
        <p className={styles.text}>{translations.home.subtitle}</p>
        <Link to='/library' style={{ textDecoration: 'none' }}>
            <Button variant='contained' style={{
              borderRadius: 35,
              backgroundColor: '#c68c53',
              padding: '10px 20px',
              marginBottom: '15px',
              fontSize: '14px'
            }}>
              {translations.buttons.goToLibrary}
            </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
