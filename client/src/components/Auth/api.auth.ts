import axios, { type AxiosResponse } from 'axios';
import type { ServerAuthResponse } from './UserType';

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
    return { user: { id: 0, email: '', password: '' }, accessToken: '' };
  }
};
 
export const fetchLogOut = async (): Promise<ServerAuthResponse> => {
  const response: AxiosResponse<ServerAuthResponse> = await axios.get('/api/auth/logout');
  return response.data;
};

export const fetchRegister = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<ServerAuthResponse> => {
  const response: AxiosResponse<ServerAuthResponse> = await axios.post('/api/auth/registration', {
    email,
    password,
  }); 

  return response.data;
};