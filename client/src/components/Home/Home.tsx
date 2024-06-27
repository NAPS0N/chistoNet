
import React from 'react';
import ProductItem from '../Product/ProductItem';
import { useAppSelector } from '../../App/redux/store';
import { Carousel } from 'antd';


const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '500px',
  width: '1200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  overflow: 'hidden'
};


function Home(): JSX.Element {
  const  products = useAppSelector((store) => store.products.products);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
<div>
<Carousel autoplay autoplaySpeed={2000} afterChange={onChange}>
      <div>
        <img style={contentStyle} src='./public/slider/1.png' alt='1'/>
      </div>
      <div>
      <img style={contentStyle} src='./public/slider/2.jpg' alt='2'/>
      </div>
      <div>
      <img style={contentStyle} src='./public/slider/3.jpg' alt='3'/>
      </div>
    </Carousel>

    </div>





    <h2>Товары</h2>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      
      {products.map((product) => (
        <div className='product-item'>
          <ProductItem key={product.id} product={product}/>
        </div>
        ))}
 
      </div>
      </>

  );
}

export default Home;