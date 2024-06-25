/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { ProductType } from '../../../components/Product/ProductType';
import { fetchProductLoad, fetchShopProduct, fetchSingleProduct } from '../../../components/Product/product.Api';

export type InitialStateType = {
  products: ProductType[];
};

const initialState: InitialStateType = {
  products: [],
};

const loadProducts = createAsyncThunk('products/load', async () => fetchProductLoad())
const loadProduct = createAsyncThunk('product/load', async () => fetchSingleProduct())
const loadProductShop = createAsyncThunk('productShop/load', async () => fetchShopProduct())
  

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.products = action.payload; 
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.products = [];
      })
      .addCase(loadProducts.pending, (state, action) => {
        state.products = [];
      })
      .addCase(loadProductShop.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(loadProductShop.rejected, (state, action) => {
        state.products = [];
      })
      .addCase(loadProductShop.pending, (state, action) => {
        state.products = [];
      })
    
      
  },
});

export { loadProducts, loadProduct, loadProductShop};

export default productSlice.reducer
