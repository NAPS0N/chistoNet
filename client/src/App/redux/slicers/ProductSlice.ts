/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { CreateProductType, ProductType } from '../../../components/Product/ProductType';
import { fetchCreateProduct, fetchProductLoad, fetchShopProduct } from '../../../components/Product/product.Api';

export type InitialStateType = {
  products: ProductType[];
};

const initialState: InitialStateType = {
  products: [],
};

const loadProducts = createAsyncThunk('products/load', async () => fetchProductLoad())
const loadProductShop = createAsyncThunk('productShop/load', async () => fetchShopProduct())
// const loadProductUser = createAsyncThunk('productUser/load', async () => fetchUserProduct())
const CreatProduct = createAsyncThunk('product/create', async (createForm: CreateProductType) => fetchCreateProduct(createForm))


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
      .addCase(CreatProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(CreatProduct.rejected, (state, action) => {
        state.products = [];
      })
      .addCase(CreatProduct.pending, (state, action) => {
        state.products = [];
      })
      // .addCase(loadProductUser.fulfilled, (state, action) => {
      //   state.products = action.payload;
      // })
      // .addCase(loadProductUser.rejected, (state, action) => {
      //   state.products = [];
      // })
      // .addCase(loadProductUser.pending, (state, action) => {
      //   state.products = [];
      // })
    
      
  },
});

export { loadProducts, loadProductShop, CreatProduct};

export default productSlice.reducer
