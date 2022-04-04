import React from 'react';
import { Route, Routes } from 'react-router-dom';

import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage';
import HomePage from './pages/HomePage/HomePage';
import LibraryPage from './pages/LibraryPage/LibraryPage';
import AddBook from './containers/AddBook/AddBook';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<HomePage />} />
      <Route path='/library' exact element={<LibraryPage />} />
      <Route path='/book/:id' exact element={<BookDetailsPage />} />
      <Route path='/addbook' exact element={<AddBook />} />
    </Routes>
  );
}

export default App;
