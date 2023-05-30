import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Flex } from '@chakra-ui/react';

const Register = () => {
  return (
    <Flex justify="center" align="baseline" pt="24px" h="93.9vh" bg="gray.100">
      <RegisterForm />
    </Flex>
  );
};

export default Register;
