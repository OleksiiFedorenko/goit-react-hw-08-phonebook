import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { logIn } from 'redux/auth/authOperations';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailWarningMessage = 'Please enter valid email';
// password regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
// 8 characters: at least one digit, one lower case, one upper case
const passwordRegex = /.{8,}/;
const passwordWarningMessage = 'Password must be at least 8 characters';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, emailWarningMessage)
    .required('Please enter your email'),
  password: yup
    .string()
    .matches(passwordRegex, passwordWarningMessage)
    .required('Please enter your password'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (credentials, { resetForm }) => {
    dispatch(logIn(credentials));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </label>

        <label>
          Password
          <Field type="text" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
