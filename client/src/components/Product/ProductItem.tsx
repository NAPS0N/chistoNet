import React from 'react';
import {useParams} from 'react-router-dom'
import ProductCard from './ProductCard'
import { useAppSelector } from '../../App/redux/store';
import type { ProductType } from './ProductType';

function ProductItem(): JSX.Element {
  const {id} = useParams()

  const selectedProduct = useAppSelector((store) => store.products.products.find(product => product.id === Number(id)));
  // selectedProduct = selectedProduct ?? new 
  //product = get product/ by id elector 
  //    //
  return (
    <div>
      {selectedProduct  && (
        <ProductCard product={selectedProduct} />
      )}
    </div>
    
  );
}

export default ProductItem;