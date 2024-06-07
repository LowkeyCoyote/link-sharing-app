import { createBrowserRouter, Navigate, RouterProvider, Outlet } from 'react-router-dom';
import SignInPage from '@pages/SignInPage';
import SignUpPage from '@pages/SignUpPage';
import HomePage from '@pages/HomePage';
import PreviewPage from '@pages/PreviewPage';
import ProfilePage from '@pages/ProfilePage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from '@redux/authSlice';
import { AppDispatch } from '@redux/store';
import LinkShared from '@pages/LinksShared';

const ProtectedRoutes = () => {
  const localStorageToken = localStorage.getItem('token');
  return localStorageToken === null || localStorageToken === 'undefined' ? (
    <Navigate to="/signin" replace />
  ) : (
    <Outlet />
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signin" replace />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/link/:id',
    element: <LinkShared />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/preview',
        element: <PreviewPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },

]);

export default function Router() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}
