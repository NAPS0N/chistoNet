import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Nav from './Navbar/Nav';
import '../index.css';
import Footer from './Footer/Footer';
import axios from 'axios';
import axiosInstance from '../axiosInstance';
import { useAppDispatch, useAppSelector } from '../App/redux/store';
import { setUser } from '../App/redux/slicers/AuthSlicer';
import type { ServerAuthResponse } from './Auth/UserType';

export default function Layout(): JSX.Element {
  const userDispatch = useAppDispatch();

  useEffect(() => {
    axiosInstance
      .get<ServerAuthResponse>('/token/refresh')
      .then((data) => userDispatch(setUser(data.data.user)))
      .catch(console.log);
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
