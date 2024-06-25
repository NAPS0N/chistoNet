import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import type { ProductType } from './ProductType';
import {ProductImg} from '../ProductImg/ProductImg';

import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import { loadProducts } from '../../App/redux/slicers/ProductSlice';


function ListOfProducts(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store)=> store.products.products)
  
  useEffect(()=> {
    dispatch(loadProducts()).catch(console.log);
  }, [])

  return (
    <>
      {products.map((product) => <ProductCard key={product.id} product={product}/>)}
    
    </>
  );
}

export default ListOfProducts;
