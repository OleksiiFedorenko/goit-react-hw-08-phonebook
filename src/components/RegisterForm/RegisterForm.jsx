import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { register } from 'redux/auth/authOperations';

const nameRegex =
  /^[a-zA-Zа-яґєіїА-ЯҐЄІЇ]+(([' -][a-zA-Zа-яґєіїА-ЯҐЄІЇ ])?[a-zA-Zа-яґєіїА-ЯҐЄІЇ]*)*$/;
const nameWarningMessage =
  "Name may contain only letters, apostrophe, dash and spaces. For example Jacob Mercer, Charles de Castelmore d'Artagnan";
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailWarningMessage =
  "Email address must include letters/digits, '@' symbol, and valid domain. Periods, underscores, hyphens can be also used. For example email@gmail.com";
// password regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
// 8 characters: at least one digit, one lower case, one upper case
const passwordRegex = /.{8,}/;
const passwordWarningMessage = 'Password must be at least 8 characters';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegex, nameWarningMessage)
    .required('Please enter your name'),
  email: yup
    .string()
    .matches(emailRegex, emailWarningMessage)
    .required('Please enter your email'),
  password: yup
    .string()
    .matches(passwordRegex, passwordWarningMessage)
    .required('Please enter your password'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (credentials, { resetForm }) => {
    dispatch(register(credentials));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>

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

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
