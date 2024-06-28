import React, { useEffect} from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import { loadProducts } from '../../App/redux/slicers/ProductSlice';
import { loadUsers } from '../../App/redux/slicers/AuthSlicer';


function ListOfProducts(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store)=> store.products.products)
  
  useEffect(()=> {
    dispatch(loadProducts()).catch(console.log);
  }, [])

  useEffect(() => {
    dispatch(loadUsers()).catch(console.log);
  }, []);

  return (
    <Grid  container spacing={2} xs={12} sm={12}>
      {products.map((product) => <ProductCard key={product.id} product={product}/>)}
    </Grid>
  );
}

export default ListOfProducts;
