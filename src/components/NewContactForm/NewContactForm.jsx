import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { contactValidationSchema } from 'common/validation';
import * as create from 'common/toastCreator';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const NewContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const toast = useToast();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const normalizedName = name.toLowerCase();
    if (
      contacts.some(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return toast(create.warning(`${name} is already in contacts.`));
    }

    dispatch(addContact({ name, number }));
    toast(create.success(`${name} is added to contacts.`));
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

              {/* <Button type="submit" colorScheme="blue" width="full">
                Add contact
              </Button> */}
              <IconButton
                type="submit"
                colorScheme="blue"
                width="full"
                icon={<AddIcon />}
              />
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default NewContactForm;
