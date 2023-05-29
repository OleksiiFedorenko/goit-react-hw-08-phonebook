import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import { logIn } from 'redux/auth/authOperations';
import { loginValidationSchema } from 'common/validation';
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (credentials, { resetForm }) => {
    try {
      const res = await dispatch(logIn(credentials)).unwrap();
      toast.success(`Welcome back, ${res.user.name}!`);
      resetForm();
    } catch (error) {
      if (error.status === 400)
        return toast.error('The email or password is incorrect.');
      toast.error('Something went wrong. Please try agail later.');
    }
  };

  return (
    <Box bg="white" p={6} rounded="md" w="300px">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <VStack spacing={4} align="flex-start">
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
                  type="text"
                  variant="filled"
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="blue" width="full">
                Log in
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
