import LoginForm from 'components/LoginForm/LoginForm';
import { Flex } from '@chakra-ui/react';

const Login = () => {
  return (
    <Flex justify="center" align="baseline" pt="24px" h="93.9vh" bg="gray.100">
      <LoginForm />
    </Flex>
  );
};

export default Login;
