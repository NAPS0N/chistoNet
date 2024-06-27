import React, { useEffect } from 'react';
import ProductItem from '../Product/ProductItem';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import './Home.css';
import { loadNews } from '../../App/redux/slicers/NewsSlicer';
import NewsCardList from '../News/NewsCardList';
import { Link } from 'react-router-dom';
import { loadUsers } from '../../App/redux/slicers/AuthSlicer';


function Home(): JSX.Element {
  const  products = useAppSelector((store) => store.products.products);
  const dispatch = useAppDispatch();
  const news = useAppSelector((store) => store.news.news)
  

  useEffect(() => {
    dispatch(loadNews()).catch(console.log);
  }, []);

  useEffect(() => {
    dispatch(loadUsers()).catch(console.log);
  }, []);

  console.log(news, 'news');
  

  return (
    <>
    <div className="home-image-container">
      <img src="../../../public/homePage.png" alt="" className='home-image'/>
    </div>
    <h2 className='header'>Товары</h2>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      
      {products.map((product) => (
        <div className='product-item'>
          <Link to={`/product/${product.id}`}><ProductItem key={product.id} product={product}/></Link>
        </div>
        ))}


 
      </div>
      <h2 className='header-news'>Новости</h2>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {news.map((el) => (
                  <div className='news-item'>
                  <NewsCardList key={el.id} news={el}/>
                </div>
        ))} 
      </div>
      </>

  );
}

export default Home;