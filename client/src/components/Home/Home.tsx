import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import ProductItem from '../Product/ProductItem';
import { useAppSelector, useAppDispatch } from '../../App/redux/store';

import './Home.css';
import { loadNews } from '../../App/redux/slicers/NewsSlicer';
import NewsCardList from '../News/NewsCardList';
import { Link } from 'react-router-dom';
import { loadUsers } from '../../App/redux/slicers/AuthSlicer';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '550px',
  width: '1200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  overflow: 'hidden',
};

function Home(): JSX.Element {
  const products = useAppSelector((store) => store.products.products);
  const dispatch = useAppDispatch();
  const news = useAppSelector((store) => store.news.news);

  useEffect(() => {
    dispatch(loadNews()).catch(console.log);
  }, []);

  useEffect(() => {
    dispatch(loadUsers()).catch(console.log);
  }, []);

  console.log(news, 'news');

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div>
        <Carousel autoplay autoplaySpeed={2500} afterChange={onChange}>
          <div>
            <img style={contentStyle} src="./public/slider/1.png" alt="1" />
          </div>
          <div>
            <img style={contentStyle} src="./public/slider/2.jpg" alt="2" />
          </div>
          <div>
            <img style={contentStyle} src="./public/slider/3.jpg" alt="3" />
          </div>
        </Carousel>
      </div>

      <h2>Товары</h2>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div className="product-item">
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <ProductItem key={product.id} product={product} />
            </Link>
          </div>
        ))}
      </div>
      <h2 className="header-news">Новости</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {news.map((el) => (
          <div className="news-item">
            <NewsCardList key={el.id} news={el} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
