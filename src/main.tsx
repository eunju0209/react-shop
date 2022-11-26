import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/fashion',
        element: <Products category='fashion' pageTitle='패션' />,
      },
      {
        path: '/accessory',
        element: <Products category='jewelery' pageTitle='액세서리' />,
      },
      {
        path: '/digital',
        element: <Products category='electronics' pageTitle='디지털' />,
      },
      { path: '/cart', element: <Cart /> },
      { path: '/product/:id', element: <ProductDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
