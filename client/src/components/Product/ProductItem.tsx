import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import ProductCard from './ProductCard'
import ProductImg from './ProductImg'
import { useAppSelector } from '../../App/redux/store';
import type { ProductType } from './ProductType';
import   './ProductItem.css'

function ProductItem({ product }: { product: ProductType }): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const slides = product?.ProductImgs;

  return (
    <div>
      {product !== undefined && (
        <Card sx={{ width: 200, height: 200 }}>
          <CardHeader sx={{fontSize:'1px', p: '10px 5px 5px 10px'}}
            title={
              <Typography variant="h6" sx={{ fontSize: '1rem',height: '55px', overflow: 'hidden', textOverflow: "ellipsis", fontFamily: 'Nunito', fontWeight: 'bold'}}>
                {product.title}
              </Typography>
            }
            className='product-cardHeader'
          />
          <div className="slider-container">
            {slides.map((slide, index) => (
              <CardMedia
                key={slide.id}
                component="img"
                height="140"
                image={slide.img}
                alt={slide.alt}
                className={`${slide} ${index === currentSlide ? 'active' : ''}`}
                onMouseEnter={() => handleSlideChange(index)}
              />
            ))}
          </div>
          <CardContent sx={{p: '5px 5px 10px 5px'}}>

            <Typography variant="body2" color="text.secondary" sx={{fontFamily: 'Nunito', fontWeight: 'bold', color: 'black'}} >
              цена: {product.price}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default ProductItem;