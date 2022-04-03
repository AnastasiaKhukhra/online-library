import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import { useStyles } from './HomePage.styles';

const HomePage = (props) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>Free Online Library</h2>
        <p className={styles.text}>Прянощі — ключ до довголіття та міжгалактичним подорожам. Той, хто контролює прянощі, контролює весь світ. Але прянощі не так-то просто дістати, адже знайти їх можна лише на непривітному Арракісі, повному прихованих та явних загроз. 
        </p>
        <Link to='/library' style={{ textDecoration: 'none' }}>
            <Button variant='contained' style={{
              borderRadius: 35,
              backgroundColor: "#c68c53",
              padding: "10px 20px",
              fontSize: "14px"
            }}>
              Go to books list
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
