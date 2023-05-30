import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Flex, Box, Heading, Text, Button, useToast } from '@chakra-ui/react';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { id, name, number } = contact;

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast({
      title: `${name} was removed from contacts.`,
      status: 'error',
      variant: 'subtle',
      position: 'top',
      isClosable: true,
    });
  };

  return (
    <Flex justify="space-between" align="center" gap="12px">
      <Box>
        <Heading size="sm">{name}</Heading>
        <Text pt="2" fontSize="md">
          {number}
        </Text>
      </Box>
      <Button
        type="button"
        onClick={handleDelete}
        colorScheme="red"
        variant="ghost"
      >
        Delete
      </Button>
    </Flex>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;
