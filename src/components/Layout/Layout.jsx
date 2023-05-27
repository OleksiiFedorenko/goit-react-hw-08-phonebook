import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <AppBar />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <ToastContainer />
    </>
  );
};

export default Layout;
