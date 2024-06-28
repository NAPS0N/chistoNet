import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { NewsType } from '../../../../pages/News/NewsType';
import {
  fetchCreateNews,
  fetchDeleteNews,
  fetchNews,
  fetchOneNews,
  fetchUpdateNews,
} from '../../../../pages/News/api.news';

export type InitialStateType = {
  news: NewsType[];

  isLoading: boolean;
};

const initialState: InitialStateType = {
  news: [],

  isLoading: true,
};

const loadNews = createAsyncThunk('news/load', async () => fetchNews());
const loadOneNews = createAsyncThunk('news/load', async (id: number) => fetchOneNews(id));

const createNews = createAsyncThunk('news/create', async (newNews: NewsType) =>
  fetchCreateNews(newNews),
);
const deleteNews = createAsyncThunk('news/delete', async (id: number) => fetchDeleteNews(id));
const updateNews = createAsyncThunk('news/update', async (upNews: NewsType) =>
  fetchUpdateNews(upNews),
);

export const questionSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // getOneNews: (state, action) => {
    //   state.oneNews = state.news.find((news) => news.id === action.payload)
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isLoading = false;
      })
      .addCase(loadNews.rejected, (state) => {
        state.news = [];
      })
      .addCase(loadNews.pending, (state) => {
        state.news = [];
        state.isLoading = true;
      })

      .addCase(createNews.fulfilled, (state, action) => {
        state.news = [...state.news, action.payload];
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        state.news = state.news.filter((oneNews) => oneNews.id !== action.payload);
      })
      .addCase(updateNews.fulfilled, (state, action) => {
        state.news = state.news.map((oneNews) =>
          oneNews.id === action.payload.id ? action.payload : oneNews,
        );
      });
  },
});

export { loadNews, createNews, deleteNews, updateNews, loadOneNews };

export default questionSlice.reducer;
