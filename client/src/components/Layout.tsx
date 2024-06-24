import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Navbar/Nav';
import { Container } from '@mui/material';
import '../index.css';
import Footer from './Footer/Footer';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../App/redux/store';
import { loadProducts } from '../App/redux/slicers/ProductSlice';

export default function Layout(): JSX.Element {
  const productDispatch = useAppDispatch();


  useEffect(() => {
    productDispatch(loadProducts()).catch(console.log);
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
