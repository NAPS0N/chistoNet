import React from 'react';
import type { ImageType } from './ImageType';


function ProductImg({image} : {image : ImageType} ): JSX.Element {

  return (
    <div>
       
      <img src={image.img} alt='smth'/>
     
    </div>
  );
}

export default ProductImg;