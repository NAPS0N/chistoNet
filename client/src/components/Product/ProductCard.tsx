import React from 'react';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import type { ProductType } from './ProductType';
import  ProductImg  from '../ProductImg/ProductImg';
import { IconButton, InfoIcon, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductCard({product} :{product: ProductType}): JSX.Element {
  

  const dispatch = useAppDispatch();
  const products = useAppSelector((store)=> store.products.products)
  return (
    
      <ImageList sx={{ width: 1000, height: 950 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"><Link to={`/products/${product.id}`}>{product.title}</Link></ListSubheader>
      </ImageListItem>
      
      
      {product.ProductImgs.map((photo) => 
          <ImageListItem key={photo.id}>
            <ProductImg key={photo.id} photo={photo}/>

            </ImageListItem>


        
        
         )}
      </ImageList>
    
  );
}

export default ProductCard;