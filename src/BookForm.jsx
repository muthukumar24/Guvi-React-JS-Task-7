import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik and related components
import * as Yup from 'yup'; // Import Yup for validation schema
import { Link } from 'react-router-dom'; // Import Link for navigation

const BookForm = ({ addBook, editBook, editingBook }) => {
  // Initial values for the form
  const initialValues = {
    id: '',
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  };

  // Validation schema for the form fields
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required'),
  });

  // Function to handle form submission
  const onSubmit = (values, { resetForm }) => {
    if (editingBook) {
      // If editing, update the book
      editBook(values);
    } else {
      // If adding, create a new book with a unique id
      addBook({ ...values, id: Date.now() });
    }
    resetForm(); // Reset the form after submission
  };

  return (
    <Formik
      initialValues={initialValues} // Set initial values for the form
      validationSchema={validationSchema} // Set validation schema
      onSubmit={onSubmit} // Set submit handler
      enableReinitialize // Enable reinitialization when initial values change
    >
      {({ setValues, resetForm }) => {
        useEffect(() => {
          if (editingBook) {
            // If editing a book, set the form values to the book's values
            setValues(editingBook);
          } else {
            // If not editing, reset the form
            resetForm();
          }
        }, [editingBook, setValues, resetForm]);

        return (
          <Form className='book-form'>
            <Field type="hidden" name="id" />
            {/* Title field */}
            <div className="form-group">
              <label htmlFor="title" className='book-form-text'>Title</label>
              <Field className="form-control" type="text" id="title" name="title" />
              <ErrorMessage name="title" component="div" className="text-danger" />
            </div>
            {/* Author field */}
            <div className="form-group mt-2">
              <label htmlFor="author" className='book-form-text'>Author</label>
              <Field className="form-control" type="text" id="author" name="author" />
              <ErrorMessage name="author" component="div" className="text-danger" />
            </div>
            {/* ISBN field */}
            <div className="form-group mt-2">
              <label htmlFor="isbn" className='book-form-text'>ISBN</label>
              <Field className="form-control" type="text" id="isbn" name="isbn" />
              <ErrorMessage name="isbn" component="div" className="text-danger" />
            </div>
            {/* Publication Date field */}
            <div className="form-group mt-2">
              <label htmlFor="publicationDate" className='book-form-text'>Publication Date</label>
              <Field className="form-control" type="date" id="publicationDate" name="publicationDate" />
              <ErrorMessage name="publicationDate" component="div" className="text-danger" />
            </div>
            {/* Submit and Back buttons */}
            <div className='d-flex justify-content-center gap-3 mt-3'>
              <button type="submit" className="btn btn-primary">
                {editingBook ? 'Update Book' : 'Add Book'}
              </button>
              <Link to={'/'}>
                <button className='btn btn-secondary'>Back</button>
              </Link>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BookForm;
