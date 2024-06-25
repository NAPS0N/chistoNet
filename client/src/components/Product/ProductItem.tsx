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

  const slides = product.ProductImgs;

  return (
    <div>
      {product !== undefined && (
        <Card sx={{ maxWidth: 340, height: 300 }}>
          <CardHeader
            title={product.title}
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
          <CardContent>
            <Typography variant="body2" color="text.secondary" className="text-description-item" height={100}>
              {product.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              цена: {product.price}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default ProductItem;