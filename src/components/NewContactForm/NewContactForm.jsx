import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { contactValidationSchema } from 'common/validation';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';

const NewContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const toast = useToast();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const normalizedName = name.toLowerCase();
    if (
      contacts.some(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      toast({
        title: `${name} is already in contacts.`,
        status: 'warning',
        variant: 'subtle',
        position: 'top',
        isClosable: true,
      });
      return;
    }

    dispatch(addContact({ name, number }));
    toast({
      title: `${name} is added to contacts.`,
      status: 'success',
      variant: 'subtle',
      position: 'top',
      isClosable: true,
    });
    resetForm();
  };

  return (
    <Box bg="white" p={6} rounded="md" maxW="300px" flex="1">
      <Heading size="md" mb="12px">
        Add new contact
      </Heading>

      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={contactValidationSchema}
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

              <FormControl isInvalid={!!errors.number && touched.number}>
                <FormLabel htmlFor="number">Phone number</FormLabel>
                <Field
                  as={Input}
                  id="number"
                  name="number"
                  type="tel"
                  variant="filled"
                />
                <FormErrorMessage>{errors.number}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="blue" width="full">
                Add contact
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default NewContactForm;
