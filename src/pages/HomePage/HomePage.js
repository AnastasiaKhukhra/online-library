import React from 'react';
import { Link } from 'react-router-dom';

import classes from './HomePage.module.css';

const HomePage = (props) => {

  return (
    <div className={classes.goto_form_page}>
      <h2>Free Online Library</h2>
      <Link to='/library'>
        <button variant="outlined">
          Go to books list
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
