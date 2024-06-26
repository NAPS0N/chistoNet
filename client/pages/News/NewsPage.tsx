import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../src/App/redux/store';
import { loadNews } from '../../src/App/redux/slicers/NewsSlicer';

import NewsCardList from '../../src/components/News/NewsCardList';

function NewsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const allNews = useAppSelector((store) => store.news.news);

  useEffect(() => {
    dispatch(loadNews()).catch(console.log);
  }, []);
  console.log('NewsPage', allNews);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, mt: 10 }}>
      {allNews.map((news) => (
        <NewsCardList key={news.id} news={news} />
      ))}
    </Box>
  );
}

export default NewsPage;
