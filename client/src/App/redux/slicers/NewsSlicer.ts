import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { NewsType } from '../../../../pages/News/NewsType';
import { fetchNews } from '../../../../pages/News/api.news';

export type InitialStateType = {
  news: NewsType[];
  isLoading: boolean;
};

const initialState: InitialStateType = {
  news: [],
  isLoading: true,
};

const loadNews = createAsyncThunk('news/load', async () => fetchNews());

export const questionSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isLoading = false;
      })
      .addCase(loadNews.rejected, (state, action) => {
        state.news = [];
      })
      .addCase(loadNews.pending, (state, action) => {
        state.news = [];
        state.isLoading = true;
      });
  },
});

export { loadNews };

export default questionSlice.reducer;
