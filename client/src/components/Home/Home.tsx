import React from 'react';
import ProductItem from '../Product/ProductItem';
import { useAppSelector } from '../../App/redux/store';
import './Home.css';

function Home(): JSX.Element {
  const  products = useAppSelector((store) => store.products.products);
  const news = useAppSelector((store) => store.news.news)
  console.log(news, 'news');
  

  return (
    <>
    <div className="home-image-container">
      <img src="../../../public/homePage.png" alt="" className='home-image'/>
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