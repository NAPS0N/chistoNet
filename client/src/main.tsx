import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Chat, Home } from '@mui/icons-material';
import App from './App/App';
import './index.css';

import { store } from './App/redux/store';
// k
import ErrorPage from './components/Navbar/ErrorPage';
import ListOfProducts from './components/Product/ListOfProducts';
import Layout from './components/Layout';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import ProfileIndividual from '../pages/Profile/ProfileIndividual';

import HomePageChat from '../pages/Chat/HomePageChat';
import ChatPage from '../pages/Chat/ChatPage';







const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/products',
        element: <ListOfProducts />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {

        path: '/profile',
        element: <ProfileIndividual />,
      
      },
    

        path: '/homepagechat',
        element: <HomePageChat />,
      },
      {
        path: '/chat',
        element: <ChatPage />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
