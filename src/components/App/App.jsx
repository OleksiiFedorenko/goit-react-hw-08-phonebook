import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';
import Layout from 'components/Layout/Layout';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';
import Loader from 'components/Loader/Loader';
import { Container } from './App.styled';

const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" component={<Login />} />
            }
          />
        </Route>
        <Route path="*" element={<></>} />
      </Routes>
    </Container>
  );
};

export default App;
