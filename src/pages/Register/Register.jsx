import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Flex } from '@chakra-ui/react';

const Register = () => {
  return (
    <Flex bg="gray.100" align="center" justify="center" h="94.1vh">
      <RegisterForm />
    </Flex>
  );
};

export default Register;
