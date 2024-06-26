import axios, { type AxiosResponse } from 'axios';
import type { ProductType } from './ProductType';
import axiosInstance from '../../axiosInstance';
import type { CategoryType } from './CategoryType';

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

export const fetchCategoryLoad = async (): Promise<CategoryType[]> => {
  const response: AxiosResponse<{ message: string; categories: CategoryType[] }> =
    await axios.get('/api/categories/:id');
  return response.data.categories;
};

export const fetchProductByCategoryLoad = async (id: number): Promise<ProductType[]> => {
  const response: AxiosResponse<{ message: string; products: ProductType[] }> =
    await axios.get(`/api/products/categories/${id}`);
  return response.data.products;
};

// export const fetchSingleProduct = async (): Promise<ProductType> => {
//   const response: AxiosResponse<{ message: string; product: ProductType}> =
//     await axios.get('/api/products/:id');
//     return response.data.product
// }



