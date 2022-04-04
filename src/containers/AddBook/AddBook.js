import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import validationSchema from '../../common/validator';
import translations from '../../common/translations';

import { Box, Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useStyles } from './AddBook.styles';

const AddBook = () => {
  const image = useRef('');
  const styles = useStyles();

  async function addBookHandler(book) {
    const formData = new FormData();
    formData.append('title', book.title);
    if (book.image) { formData.append('image', book.image) };
    formData.append('shortDescription', book.shortDescription);
    formData.append('detailedDescription', book.detailedDescription);
    formData.append('releaseDate', book.releaseDate);
    formData.append('author', book.author);
    const response = await fetch('http://localhost:8080/books/book', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      console.log(response)
      throw new Error('Something went wrong!');
    }
    const data = await response.json();
    console.log(data);
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      shortDescription: '',
      detailedDescription: '',
      releaseDate: '',
      author: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const book = {
        title: values.title,
        image: image.current.files[0],
        shortDescription: values.shortDescription,
        detailedDescription: values.detailedDescription,
        releaseDate: values.releaseDate,
        author: values.author,
      };
      addBookHandler(book);
      resetForm({ values: '' })
    },
  });

  return (
    <Box className={styles.root}>
      <Box className={styles.container}>
        <h2>{translations.buttons.addBook}</h2>
        <form onSubmit={formik.handleSubmit}>
          {Object.keys(formik.values).map((name) => (
            <Box className={styles.textfield} key={name}>
              <TextField
                id={name}
                type={name !== 'releaseDate' ? 'text' : 'date'}
                label={name !== 'releaseDate' ? translations.form[name] : ''}
                value={formik.values[name]}
                onChange={formik.handleChange}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
                fullWidth
              />
            </Box>
          ))}
          <TextField
            id='image'
            type='file'
            name='image'
            InputProps={{
              style: { color: 'grey' },
            }}
            inputRef={image}
            fullWidth
          />
          <Button type='submit' variant='contained' style={{
            borderRadius: 35,
            backgroundColor: '#c68c53',
            padding: '5px 10px',
            marginRight: '5px',
            marginTop: '15px',
            fontSize: '14px',
            width: '200px'
          }}>
            {translations.buttons.addBook2}
          </Button>
          <Link to='/library' style={{ textDecoration: 'none' }}>
            <Button variant='contained' style={{
              borderRadius: 35,
              backgroundColor: '#c68c53',
              marginTop: '15px',
              padding: '5px 10px',
              fontSize: '14px',
              width: '200px'
            }}>
              {translations.buttons.library}
            </Button>
          </Link>
        </form>
      </Box>
    </Box>
  );
};

export default AddBook;
