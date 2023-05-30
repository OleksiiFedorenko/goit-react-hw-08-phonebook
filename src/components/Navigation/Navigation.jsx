import { useSelector } from 'react-redux';
import { NavLink as MenuLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Flex, Link } from '@chakra-ui/react';
import { linkStyles } from 'common/styleConstants';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Flex gap="16px">
        <Link as={MenuLink} to="/" sx={linkStyles}>
          Home
        </Link>
        {isLoggedIn && (
          <Link as={MenuLink} to="/contacts" sx={linkStyles}>
            Contacts
          </Link>
        )}
      </Flex>
    </nav>
  );
};

export default Navigation;
