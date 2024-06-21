import React from 'react';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import type { ProductType } from './ProductType';
import  ProductImg  from '../ProductImg/ProductImg';

function ProductCard({product} :{product: ProductType}): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store)=> store.products.products)
  return (
    <div>
      
      
      {product.ProductImgs.map((photo) => {
        return (
          <div>
            <h3>{product.title}</h3>
          <ProductImg key={photo.id} photo={photo}/>
          </div>
        )
        
        } )}
    </div>
  );
}

export default ProductCard;