import axios, { type AxiosResponse } from 'axios';
import type { MessageType } from './MessageType';

// eslint-disable-next-line import/prefer-default-export
export const fetchMessage = async (): Promise<MessageType[]> => {
  const response: AxiosResponse<{ message: string; chatMessages: MessageType[] }> =
    await axios.get('/api/chat/message');
  console.log(response.data);

  return response.data.chatMessages;
};
