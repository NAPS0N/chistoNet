import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Navbar/Nav';
import { Container } from '@mui/material';
import '../index.css';
import Footer from './Footer/Footer';
import axios from 'axios';

export default function Layout(): JSX.Element {
  useEffect(() => {
    console.log(1);

    axios.get('/api/tokens/refresh');
    axios.get('/api/profile');
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
