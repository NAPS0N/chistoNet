import React, { useEffect, useState } from 'react';

import { Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../src/App/redux/store';
import { loadNews } from '../../src/App/redux/slicers/NewsSlicer';

import NewsCardList from '../../src/components/News/NewsCardList';
import { loadUsers } from '../../src/App/redux/slicers/AuthSlicer';
import type { UserType } from '../../src/components/Auth/UserType';

const useIsDarkMode = () => {
  const theme = useTheme();
  return theme.palette.mode === 'dark';
};

function NewsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isDarkMode = useIsDarkMode();
  const allNews = useAppSelector((store) => store.news.news);
  const userAuth: UserType | null = useAppSelector((state) => state.auth.user);

  const handleSettingsClick = () => {
    navigate(`/createnews`);
  };

  useEffect(() => {
    dispatch(loadNews()).catch(console.log);
  }, []);
  console.log('NewsPage', allNews);

  useEffect(() => {
    dispatch(loadUsers()).catch(console.log);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, mt: 10 }}>
      {userAuth?.firstName === 'admin' && (
        <IconButton aria-label="settings" onClick={handleSettingsClick} sx={{ gap: 0, mt: 0 }}>
          <AddIcon sx={{ ...(isDarkMode && { filter: 'invert(1)' }) }} />
        </IconButton>
      )}
      {allNews.map((news) => (
        <NewsCardList userAuth={userAuth} key={news.id} news={news} />
      ))}
    </Box>
  );
}

export default NewsPage;
