import * as Yup from 'yup';

const validationSchema = Yup.object({
  title: Yup.string()
    .min(2, 'Name of the book should be of minimum 2 characters length')
    .required('Name is required'),
  shortDescription: Yup.string()
    .min(2, 'Short description should be of minimum 2 characters length')
    .required('Short description is required'),
  detailedDescription: Yup.string()
    .min(2, 'Detailed description should be of minimum 2 characters length')
    .required('Detailed description is required'),
  releaseDate: Yup.string()
    .required('Release date is required'),
  author: Yup.string()
    .min(2, "Author's name of the book should be of minimum 2 characters length")
    .required("Author's name is required"),
});

export default validationSchema;
