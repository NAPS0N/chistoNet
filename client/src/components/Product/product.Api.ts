import axios, { type AxiosResponse } from 'axios';
import type { ProductType } from './ProductType';
import axiosInstance from '../../axiosInstance';

/**
 * запрос на получение всех карточук с продуктом
 * @returns Promise obj producta
 */

// eslint-disable-next-line import/prefer-default-export
export const fetchProductLoad = async (): Promise<ProductType[]> => {
  const response: AxiosResponse<{ message: string; products: ProductType[] }> =
    await axios.get('/api/products');
  return response.data.products;
};

export const fetchSingleProduct = async (): Promise<ProductType> => {
  const response: AxiosResponse<{ message: string; product: ProductType}> =
    await axios.get('/api/products/:id');
    return response.data.product
}

export const fetchShopProduct = async (): Promise<ProductType[]> => {  
  const res: AxiosResponse<{ message: string; shopProducts: ProductType[]}> =
  await axiosInstance.get('/products/shop'); 
  
  return res.data.shopProducts;
}



