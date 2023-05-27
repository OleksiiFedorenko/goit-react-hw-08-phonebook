import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

PublicRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};

export default PublicRoute;
