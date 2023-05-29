import { useSelector } from 'react-redux';
import { NavLink as MenuLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Link } from '@chakra-ui/react';
import { linkStyles } from 'common/styleConstants';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      {isLoggedIn && (
        <Link as={MenuLink} to="/contacts" sx={linkStyles}>
          Contacts
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
