/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ProductType } from '../../../components/Product/ProductType';
import { fetchProductByCategoryLoad} from '../../../components/Product/product.Api';

export type InitialStateType = {
  productsByCategory: ProductType[];
};

const initialState: InitialStateType = {
  productsByCategory: [],
};

const loadProductByCategory = createAsyncThunk('productsByCategory/load', async (id: number) => fetchProductByCategoryLoad(id))

// const loadProduct = createAsyncThunk('product/load', async () => fetchSingleProduct())
  

export const productByCategorySlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProductByCategory.fulfilled, (state, action) => {
        state.productsByCategory = action.payload; 
 
        
      })
      .addCase(loadProductByCategory.rejected, (state) => {
        state.productsByCategory = [];
      })
      .addCase(loadProductByCategory.pending, (state) => {
        state.productsByCategory = [];
      })
      // .addCase(loadProduct.fulfilled, (state, action) => {
      //   state.products = action.payload; 
      // })
      
  },
});

export { loadProductByCategory};

export default productByCategorySlice.reducer
