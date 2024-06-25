import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { loadNews } from '../../src/App/redux/slicers/NewsSlicer';
import { useAppDispatch, useAppSelector } from '../../src/App/redux/store';

function NewsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const news = useAppSelector((store) => store.news);

  useEffect(() => {
    dispatch(loadNews()).catch(console.log);
  }, []);
  console.log('NewsPage', news);

  return <div>123</div>;
}

export default NewsPage;
