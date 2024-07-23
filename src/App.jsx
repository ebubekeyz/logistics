import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  About,
  Blog,
  BlogDetails,
  Booking,
  Contact,
  Error,
  Gallery,
  History,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  ServiceDetails,
  Services,
} from './pages';
import { ErrorElement } from './component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'services',
        element: <Services />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'blog',
        element: <Blog />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'booking',
        element: <Booking />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'history',
        element: <History />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'profile',
        element: <Profile />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'login',
        element: <Login />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'register',
        element: <Register />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'contact',
        element: <Contact />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'service-details/:id',
        element: <ServiceDetails />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'blog-details/:id',
        element: <BlogDetails />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
