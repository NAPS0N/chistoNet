import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../App/redux/store';

function ProductImg({image} ): JSX.Element {
 /// const {id} = useParams()

 /// const selectedProduct = useAppSelector((store) => store.products.products.find(product => product.id === Number(id)));

  return (
    <div>
       
      <img src={image.img} alt='smth'/>
     
    </div>
  );
}

export default ProductImg;