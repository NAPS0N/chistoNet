import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import { loadCategories } from '../../App/redux/slicers/ProductSlice';
import { loadProductByCategory } from '../../App/redux/slicers/ProductByCategorySlice';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

function ProductByCategory(): JSX.Element {
  const {id} = useParams()
  const dispatch = useAppDispatch();
  const productsByCategory = useAppSelector((store)=> store.productsByCategory.productsByCategory)

  // useEffect(()=> {
  //   dispatch(loadProductByCategory(Number(id)).catch(console.log));
  // }, [])

  // useEffect(()=> {
  //   dispatch(loadProductByCategory(Number(id)));
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(loadProductByCategory(Number(id)));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData().catch(console.log);
    console.log(fetchData(), 'fetchData()')
  }, [dispatch, id]);


  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {productsByCategory.map((product) => <ProductCard key={product.id} product={product}/>)}
    </div>
  );
}

export default ProductByCategory;