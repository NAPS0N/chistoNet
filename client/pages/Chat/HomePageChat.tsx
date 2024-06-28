import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../src/App/redux/store';
import { loadMessages } from '../../src/App/redux/slicers/MessageSlicer';
import { loadUsers } from '../../src/App/redux/slicers/AuthSlicer';
import ChatPage from './ChatPage';
import type { UserType } from '../../src/components/Auth/UserType';


function HomePageChat(): JSX.Element {
  // достаю все сообщения
  const userAuth: UserType | null = useAppSelector((state) => state.auth.user);
  const users: UserType[] | [] = useAppSelector((state) => state.auth.users);

  const dispatch = useAppDispatch();
  const allMessages = useAppSelector((state) => state.message.chatMessages);

  const myMessages = allMessages
    .filter((message) => message.fromId === userAuth?.id || message.toId === userAuth?.id)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  console.log(777777, myMessages);

  const userMessages = allMessages.filter((message) => message.fromId === userAuth?.id); // это сообщения от user 1 к user 2

  const companionMessages = allMessages.filter((message) => message.toId === userAuth?.id);

  // Получаем уникальные toId
  const uniqueToIds = Array.from(new Set(companionMessages.map((message) => message.fromId)));

  // Получаем массив уникальных пользователей
  const companionUsers = users.filter((user) => uniqueToIds.includes(user.id));

  useEffect(() => {
    dispatch(loadMessages()).catch(console.log);
  }, []);

  useEffect(() => {
    dispatch(loadUsers()).catch(console.log);
  }, []);

  const navigate = useNavigate();
  const [user, setUser] = useState('');

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 2,
      }}
    >
      <ChatPage
        users={users}
        userAuth={userAuth}
        myMessages={myMessages}
        companionMessages={companionMessages}
        companionUsers={companionUsers}
      />
    </Box>
  );
}

export default HomePageChat;
