import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
