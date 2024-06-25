import axios, { type AxiosResponse } from 'axios';
import type { NewsType } from './NewsType';

// eslint-disable-next-line import/prefer-default-export
export const fetchNews = async (): Promise<NewsType[]> => {
  const response: AxiosResponse<{ message: string; allNews: NewsType[] }> =
    await axios.get('/api/news');
  console.log(123);

  return response.data.allNews;
};

export const fetchCreateNews = async (obj: NewsType): Promise<NewsType> => {
  const response: AxiosResponse<{ message: string; newNews: NewsType }> = await axios.post(
    '/api/news',
    obj,
  );
  return response.data.newNews;
};
/**
 *
 * @returns
 */
export const fetchUpdateNews = async (news: NewsType): Promise<NewsType> => {
  const response: AxiosResponse<{ message: string; updateNews: NewsType }> = await axios.put(
    `/api/news/${news.id}`,
    news,
  );
  return response.data.updateNews;
};

export const fetchDeleteNews = async (id: number): Promise<number> => {
  try {
    await axios.delete(`/api/news/${id}`);
    return id;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
