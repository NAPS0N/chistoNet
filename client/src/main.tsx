import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App/App';
import './index.css';

import { store } from './App/redux/store';
import Nav from './components/Navbar/Nav';
import ErrorPage from './components/Navbar/ErrorPage';
import ListOfProducts from './components/Product/ListOfProducts';
import Layout from './components/Layout';
import SignUp from '../pages/Auth/SignUp';
import LogIn from '../pages/Auth/LogIn';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/products',
        element: <ListOfProducts/>,
      },
      {
        path: '/login',
        element: <LogIn />,
      
      },
      {
        path: 'reg',
        element: <SignUp />,
      
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>,
);
