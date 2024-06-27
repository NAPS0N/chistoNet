import axios, { type AxiosResponse } from 'axios';
import type { ServerAuthResponse, UserType } from './UserType';

export const fetchUsers = async (): Promise<UserType[]> => {
  const response: AxiosResponse<{ message: string; users: UserType[] }> =
    await axios.get('/api/auth/');

  return response.data.users;
};

export const fetchLogIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<ServerAuthResponse> => {
  try {
    const response: AxiosResponse<ServerAuthResponse> = await axios.post('/api/auth/login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return { user: { id: 0, email: '', password: '', phoneNumber: '' }, accessToken: '' };
  }
};

export const fetchLogOut = async (): Promise<ServerAuthResponse> => {
  const response: AxiosResponse<ServerAuthResponse> = await axios.get('/api/auth/logout');
  return response.data;
};

export const fetchRegister = async ({
  email,
  password,
  phoneNumber,
}: {
  email: string;
  password: string;
  phoneNumber: string;
}): Promise<ServerAuthResponse> => {
  const response: AxiosResponse<ServerAuthResponse> = await axios.post('/api/auth/registration', {
    email,
    password,
    phoneNumber,
  });

  return response.data;
};
