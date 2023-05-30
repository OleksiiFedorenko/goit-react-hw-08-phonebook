import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from 'redux/auth/authOperations';
import { registerValidationSchema } from 'common/validation';
import * as create from 'common/toastCreator';
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = async (credentials, { resetForm }) => {
    try {
      const res = await dispatch(register(credentials)).unwrap();
      toast(
        create.success(
          `Welcome, ${res.user.name}. We hope you'll like our service!`
        )
      );
      resetForm();
    } catch (error) {
      let message = 'Something went wrong. Please try agail later.';
      if (error.code === 11000)
        message = `The user with email ${error.keyValue.email} already exists. Please log in or try different email.`;

      toast(create.error(message));
    }
  };

  return (
    <Box bg="white" p={6} rounded="md" w="300px">
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={registerValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <VStack spacing={4} align="flex-start">
              <FormControl isInvalid={!!errors.name && touched.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  type="text"
                  variant="filled"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.password && touched.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  variant="filled"
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="blue" width="full">
                Register
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegisterForm;
