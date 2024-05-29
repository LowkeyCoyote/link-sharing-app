import { createBrowserRouter, Navigate, RouterProvider, Outlet } from 'react-router-dom';
import SignInPage from '@pages/SignInPage';
import SignUpPage from '@pages/SignUpPage';
import HomePage from '@pages/HomePage';
import PreviewPage from '@pages/PreviewPage';
import ProfilePage from '@pages/ProfilePage';

const ProtectedRoutes = () => {
  const localStorageToken = localStorage.getItem('accessToken');
  console.log(localStorageToken === null);
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
  return <RouterProvider router={router} />;
}
