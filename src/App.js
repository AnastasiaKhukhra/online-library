import React, { useState, useEffect } from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';

import classes from './App.module.css'
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage';
import HomePage from './pages/HomePage/HomePage';
import LibraryPage from './pages/LibraryPage/LibraryPage';
// import Layout from './components/layout/Layout';


function App() {
  return (
    <div className={classes.main}>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/library' exact element={<LibraryPage />} />
        <Route path='/book/:id' exact element={<BookDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
