import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import RootLayout from './pages/RootLayout.jsx';
import ErrorBoundary from './pages/ErrorBoundary.jsx';
import Home from './pages/Home.jsx';
import Posts from './pages/Posts.jsx';
import SinglePost from './pages/SinglePost.jsx';
import Users from './pages/Users.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: '/posts', element: <Posts /> },
      { path: '/posts/:postId', element: <SinglePost /> },
      { path: '/users', element: <Users /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
