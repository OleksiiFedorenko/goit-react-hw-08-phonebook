import LoginForm from 'components/LoginForm/LoginForm';
import { Flex } from '@chakra-ui/react';

const Login = () => {
  return (
    <Flex bg="gray.100" align="center" justify="center" h="94.1vh">
      <LoginForm />
    </Flex>
  );
};

export default Login;
