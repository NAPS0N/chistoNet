import React from 'react';
import type { ProductImgType } from './ProductImgType';

function ProductImg({ photo }: { photo: ProductImgType }): JSX.Element {
  return (
    <div>
      <img src={photo.img} className="card-img-top" alt={photo.alt} />
    </div>
  );
}

export default ProductImg;
