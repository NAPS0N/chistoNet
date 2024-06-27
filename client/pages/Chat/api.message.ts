import { type AxiosResponse } from 'axios';
import type { MessageType } from './MessageType';
import axiosInstance from '../../src/axiosInstance';

// eslint-disable-next-line import/prefer-default-export
export const fetchMessage = async (): Promise<MessageType[]> => {
  const response: AxiosResponse<{ message: string; chatMessages: MessageType[] }> =

    await axiosInstance.get('/chat/message');


  return response.data.chatMessages;
};

export const addMessage = async (obj: MessageType): Promise<MessageType> => {
  console.log(obj, "obj");
  


  const response: AxiosResponse<{ message: string; newMessage: MessageType }> =
    await axiosInstance.post('chat/message', obj);
  return response.data.newMessage;
};
