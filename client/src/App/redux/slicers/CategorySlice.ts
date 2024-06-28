/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { CategoryType } from '../../../components/Product/CategoryType';
import { fetchCategoryLoad } from '../../../components/Product/product.Api';



export type InitialStateType = {
  categories: CategoryType [];
};

const initialState: InitialStateType = {
  categories: [],
};

const loadCategories = createAsyncThunk('categories/load', async () => fetchCategoryLoad())

  

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCategories.fulfilled, (state, action) => {
        state.categories = action.payload; 
 
        
      })
      .addCase(loadCategories.rejected, (state) => {
        state.categories = [];
      })
      .addCase(loadCategories.pending, (state) => {
        state.categories = [];
      })

  },
});

export { loadCategories};

export default categorySlice.reducer
