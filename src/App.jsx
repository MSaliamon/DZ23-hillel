import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const MyForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (values) => {
    const errors = {};
    if (isSubmitted) {
      if (!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!values.email.includes('@')) {
        errors.email = 'Invalid email format';
      }
      if (!values.phone) {
        errors.phone = 'Phone is required';
      } else if (values.phone.length !== 12 || !/^\d+$/.test(values.phone)) {
        errors.phone = 'Phone must be 12 digits and contain only numbers';
      }
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '' }}
      validate={validateForm}
      onSubmit={(values, { setSubmitting }) => {
        setIsSubmitted(true);
        // handle form submission here
      }}
    >
      <Form>
        <div>
          <label>Name:</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label>Phone:</label>
          <Field type="text" name="phone" />
          <ErrorMessage name="phone" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default MyForm;