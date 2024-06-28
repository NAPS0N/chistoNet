import axios, { type AxiosResponse } from 'axios';
import type { ProfileIndividualType } from './profielIndividualType';
import type { UserType } from '../../../src/components/Auth/UserType';
import axiosInstance from '../../../src/axiosInstance';

export const fetchLoadIndividual = async () => {
  const res: AxiosResponse<{ individual: ProfileIndividualType; user: UserType }> =
    await axiosInstance.get('/profile');

  return res.data;
};

//временно
export const fetchLoadIndividua2 = async () => {
  const res: AxiosResponse<{ individual: ProfileIndividualType; user: UserType }> =
    await axios.get('/api/profile');

  return res.data;
};
