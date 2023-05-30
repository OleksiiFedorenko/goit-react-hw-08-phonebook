import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from 'redux/contacts/contactsSelectors';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import Loader from 'components/Loader/Loader';
import { Stack, StackDivider, Box, Text } from '@chakra-ui/react';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (isLoading) return <Loader />;

  if (error)
    return (
      <Text fontSize="xl" color="red.600" fontWeight="semibold">
        Something went wrong, please try again later
      </Text>
    );

  if (contacts.length === 0)
    return (
      <Text fontSize="xl" color="red.600" fontWeight="semibold">
        No contacts yet
      </Text>
    );

  if (filteredContacts.length === 0)
    return (
      <Text fontSize="xl" color="red.600" fontWeight="semibold">
        No contacts found
      </Text>
    );

  return (
    <Stack divider={<StackDivider />} spacing="4">
      {filteredContacts.map(contact => (
        <Box key={contact.id}>
          <ContactListItem contact={contact} />
        </Box>
      ))}
    </Stack>
  );
};

export default ContactList;
