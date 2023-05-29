import { NavLink as MenuLink } from 'react-router-dom';
import { List, ListItem, Link } from '@chakra-ui/react';
import { linkStyles } from 'common/styleConstants';

const AuthNav = () => {
  return (
    <List display="flex" gap="16px">
      <ListItem>
        <Link as={MenuLink} to="/register" sx={linkStyles}>
          Register
        </Link>
      </ListItem>
      <ListItem>
        <Link as={MenuLink} to="/login" sx={linkStyles}>
          Log In
        </Link>
      </ListItem>
    </List>
  );
};

export default AuthNav;
