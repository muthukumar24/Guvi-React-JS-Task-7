import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Import Formik and related components
import * as Yup from 'yup'; // Import Yup for validation schema
import { Link } from 'react-router-dom'; // Import Link for navigation

const AuthorForm = ({ addAuthor, editAuthor, editingAuthor }) => {
  // Initial values for the form
  const initialValues = {
    id: '',
    name: '',
    birthDate: '',
    biography: '',
  };

  // Validation schema for the form fields
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required'),
  });

  // Function to handle form submission
  const onSubmit = (values, { resetForm }) => {
    if (editingAuthor) {
      // If editing, update the author
      editAuthor(values);
    } else {
      // If adding, create a new author with a unique id
      addAuthor({ ...values, id: Date.now() });
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
        // Effect to update form values when editingAuthor changes
        useEffect(() => {
          if (editingAuthor) {
            // If editing an author, set the form values to the author's values
            setValues(editingAuthor);
          } else {
            // If not editing, reset the form
            resetForm();
          }
        }, [editingAuthor, setValues, resetForm]);

        return (
          <Form className='author-form'>
            <Field type="hidden" name="id" />
            {/* Name field */}
            <div className="form-group mt-2">
              <label htmlFor="name" className='book-form-text'>Name</label>
              <Field className="form-control" type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            {/* Birth Date field */}
            <div className="form-group mt-2">
              <label htmlFor="birthDate" className='book-form-text'>Birth Date</label>
              <Field className="form-control" type="date" id="birthDate" name="birthDate" />
              <ErrorMessage name="birthDate" component="div" className="text-danger" />
            </div>
            {/* Biography field */}
            <div className="form-group mt-2">
              <label htmlFor="biography" className='book-form-text'>Biography</label>
              <Field className="form-control" as="textarea" id="biography" name="biography" />
              <ErrorMessage name="biography" component="div" className="text-danger" />
            </div>
            {/* Submit and Back buttons */}
            <div className='d-flex justify-content-center gap-3 mt-3'>
              <button type="submit" className="btn btn-primary">
                {editingAuthor ? 'Update Author' : 'Add Author'}
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

export default AuthorForm;
