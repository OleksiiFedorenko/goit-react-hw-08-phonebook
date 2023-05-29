import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import { Box, Flex, Spacer } from '@chakra-ui/react';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Box px="34px" py="12px" bg="blue.600">
        <Flex alignItems="center">
          <Navigation />
          <Spacer />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Box>
    </header>
  );
};

export default AppBar;
