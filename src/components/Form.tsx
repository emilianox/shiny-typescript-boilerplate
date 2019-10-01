import { RouteComponentProps } from '@reach/router';
import { Formik } from 'formik';
import React from 'react';

const validate = (values: { email?: string }) => {
  const errors: { email?: string } = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const onSubmit = (values: any, { setSubmitting }: any) => {
  setTimeout(() => {
    // tslint:disable-next-line: no-null-keyword
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const Basic: React.FunctionComponent<RouteComponentProps> = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
          </button>
          </form>
        )}
    </Formik>
  </div>
);

export default Basic;
