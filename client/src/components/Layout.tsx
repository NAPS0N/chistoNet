import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Navbar/Nav';
import { Container } from '@mui/material';
import '../index.css';
import Footer from './Footer/Footer';

import { store, useAppDispatch } from '../App/redux/store';
import axiosInstance from '../axiosInstance';
import { ServerAuthResponse } from './Auth/UserType';
import { setUser } from '../App/redux/slicers/AuthSlicer';

export default function Layout(): JSX.Element {
  const userDispatch = useAppDispatch();

  useEffect(() => {
    axiosInstance
      .get<ServerAuthResponse>('/token/refresh')
      .then((data) => userDispatch(setUser(data.data.user)))
      .catch(console.log);
      console.log(store.getState());
      
  }, []);


  return (
    <>

      <Nav />
      <Container maxWidth="lg">
        <div style={{ marginTop: '65px', backgroundColor: '#f6f6f6' }}>
          <Outlet />
        </div>

      </Container>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
