import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';

import NewContactForm from 'components/NewContactForm/NewContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import {
  Box,
  Flex,
  Card,
  CardHeader,
  CardBody,
  Heading,
} from '@chakra-ui/react';

const Contacts = () => {
  const [notFirstRender, setNotFirstRender] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setNotFirstRender(true);
  }, []);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box px="34px" py="24px" minH="93.9vh" bg="gray.100">
      <Flex justify="center" align="baseline" gap="24px">
        <NewContactForm />

        <Card p="24px" maxW="500px" flex="1" boxShadow="none">
          <CardHeader p="0" mb="12px">
            <Heading size="md">Your contacts</Heading>
          </CardHeader>

          <CardBody p="0">
            <Filter />
            {notFirstRender && <ContactList />}
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};

export default Contacts;
