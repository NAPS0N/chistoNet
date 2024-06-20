import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App/App';
import './index.css';

import { store } from './App/redux/store';
import Nav from './components/Navbar/Nav';
import ErrorPage from './components/Navbar/ErrorPage';
import ListOfProduct from './components/Product/ListOfProducts';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/products',
        element: <ListOfProduct />,
      },
      // {
      //   path: 'auth',
      //   element: <LogIn />,
      
      // },
      // {
      //   path: 'reg',
      //   element: <Reg />,
      
      // },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>,
);
