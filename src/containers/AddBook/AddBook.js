import React, { useRef } from 'react';

import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useStyles } from './AddBook.styles';

const AddBook = () => {
  const title = useRef('');
  const imgURL = useRef('');
  const shortDescription = useRef('');
  const detailedDescription = useRef('');
  const releaseDate = useRef('');
  const author = useRef('');
  const styles = useStyles();

  async function addBookHandler(book) {
    const formData = new FormData();
    formData.append('title', book.title);
    formData.append('image', book.imgURL);
    formData.append('shortDescription', book.shortDescription);
    formData.append('detailedDescription', book.detailedDescription);
    formData.append('releaseDate', book.releaseDate);
    formData.append('author', book.author);
    const response = await fetch('http://localhost:8080/books/book', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  }

  function submitHandler(event) {
    event.preventDefault();
    const book = {
      title: title.current.value,
      imgURL: imgURL.current.files[0],
      shortDescription: shortDescription.current.value,
      detailedDescription: detailedDescription.current.value,
      releaseDate: releaseDate.current.value,
      author: author.current.value,
    };
    addBookHandler(book);
    title.current.value = '';
    shortDescription.current.value = '';
    detailedDescription.current.value = '';
    releaseDate.current.value = '';
    author.current.value = '';
  }

  return (
    <div className={styles.root}>
      <h2>Add new book</h2>
      <form onSubmit={submitHandler}>
        <TextField id='title' label='Title' inputRef={title} />
        <TextField id='openingTextRef' label='Short description' inputRef={shortDescription} />
        <TextField id='detailedText' label='Detailed description' inputRef={detailedDescription} />
        <TextField
          id='releaseDate'
          type='date'
          InputProps={{
            style: { color: 'grey' },
          }}
          inputRef={releaseDate}
        />
        <TextField id='author' label='Author' inputRef={author} />
        <TextField
          id='imgURL'
          type='file'
          name='image'
          InputProps={{
            style: { color: 'grey' },
          }}
          inputRef={imgURL}
        />
        <Button type='submit' variant='contained' style={{
          borderRadius: 35,
          backgroundColor: "#00cca3",
          padding: "5px 10px",
          fontSize: "14px",
          width: "200px"
        }}>
          Add book
        </Button>
      </form>
    </div>
  );
};

export default AddBook;
