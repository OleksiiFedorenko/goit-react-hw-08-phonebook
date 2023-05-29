import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import { Flex, Avatar, Text, Button } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(selectUser);

  const handleClick = async () => {
    try {
      await dispatch(logOut()).unwrap();
      toast.success('See you later!');
    } catch (error) {
      toast.error('Something went wrong. Please try agail later.');
    }
  };

  return (
    <Flex gap="10px" alignItems="center">
      <Avatar name={name} size="sm" bg="gray.200" color="blue.700" />
      <Text color="white">{email}</Text>
      <Button type="button" onClick={handleClick} size="sm">
        Log Out
      </Button>
    </Flex>
  );
};

export default UserMenu;
