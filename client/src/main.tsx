import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter, redirect, useNavigate } from 'react-router-dom';

// import { Chat, Home } from '@mui/icons-material';
// import App from './App/App';
import './index.css';

import { store, useAppSelector } from './App/redux/store';
// k
import ErrorPage from './components/Navbar/ErrorPage';
import ListOfProducts from './components/Product/ListOfProducts';
import Layout from './components/Layout';
import Login from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import ProfileIndividual from '../pages/Profile/Individual/ProfileIndividual';
import PersonalAccount from '../pages/PersonalAccount/PersonalAccount';
import ProductItem from './components/Product/ProductItem';
import HomePageChat from '../pages/Chat/HomePageChat';
import ChatPage from '../pages/Chat/ChatPage';
import Chat from '../pages/Chat/Chat';
import NewsPage from '../pages/News/NewsPage';
import Shop from '../pages/Shop/Shop';
import Home from './components/Home/Home';
import Category from './components/Product/ProductByCategory';
import ProductByCategory from './components/Product/ProductByCategory';
import NewsAdmin from './components/News/NewsCreateForm';
import NewsCreateForm from './components/News/NewsCreateForm';
import NewsUpdateForm from './components/News/NewsUpdateForm';


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
        path: '/home',
        element: <Home />,
      },
      {
        path: '/products/categories/:id',
        element: <ProductByCategory />,
      },
      // {
      //   path: '/products',
      //   element: <ListOfProducts/>,
      // },
      {
        path: '/products/:id',
        element: <ProductItem />,
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
        path: '/personalaccaunt',
        element: <PersonalAccount />,
      },

      {
        path: '/homepagechat',
        element: <HomePageChat />,
      },
      {
        path: '/chat',
        element: <ChatPage />,
      },
      {
        path: '/news',
        element: <NewsPage />,
      },
      {
        path: '/shop',
        element: <Shop />,
        // loader: () => {
        //   if(!data.auth.user) {
        //      return redirect("/")
        //   }
        //   return true
        // },
      },
      {
        path: '/createnews',
        element: <NewsCreateForm />,
      },
      {
        path: '/updatenews/:id',
        element: <NewsUpdateForm />,
      },
      {
        path: '/chatroom',
        element: <Chat />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
