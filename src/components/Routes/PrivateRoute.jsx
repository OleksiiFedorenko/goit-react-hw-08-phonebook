import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
