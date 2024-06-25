import { type AxiosResponse } from 'axios';
import type { MessageType } from './MessageType';
import axiosInstance from '../../src/axiosInstance';

// eslint-disable-next-line import/prefer-default-export
export const fetchMessage = async (): Promise<MessageType[]> => {
  const response: AxiosResponse<{ message: string; chatMessages: MessageType[] }> =
    await axiosInstance.get('/chat/message');

  return response.data.chatMessages;
};
