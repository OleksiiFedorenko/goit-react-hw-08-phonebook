import * as yup from 'yup';

const nameRegex =
  /^[a-zA-Zа-яґєіїА-ЯҐЄІЇ]+(([' -][a-zA-Zа-яґєіїА-ЯҐЄІЇ ])?[a-zA-Zа-яґєіїА-ЯҐЄІЇ]*)*$/;
const nameWarningMessage =
  "Name may contain only letters, apostrophe, dash and spaces. For example Jacob Mercer, Charles de Castelmore d'Artagnan";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const loginEmailWarningMessage = 'Please enter valid email';
const registerEmailWarningMessage =
  "Email address must include letters/digits, '@' symbol, and valid domain. Periods, underscores, hyphens can be also used. For example email@gmail.com";

const passwordRegex = /.{8,}/;
const passwordWarningMessage = 'Password must be at least 8 characters';
// password regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
// 8 characters: at least one digit, one lower case, one upper case

const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const numberWarningMessage =
  'Phone number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, loginEmailWarningMessage)
    .required('Please enter your email'),
  password: yup
    .string()
    .matches(passwordRegex, passwordWarningMessage)
    .required('Please enter your password'),
});

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegex, nameWarningMessage)
    .required('Please enter your name'),
  email: yup
    .string()
    .matches(emailRegex, registerEmailWarningMessage)
    .required('Please enter your email'),
  password: yup
    .string()
    .matches(passwordRegex, passwordWarningMessage)
    .required('Please enter your password'),
});

export const contactValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegex, nameWarningMessage)
    .required('Please add name'),
  number: yup
    .string()
    .matches(numberRegex, numberWarningMessage)
    .required('Please add phone number'),
});
