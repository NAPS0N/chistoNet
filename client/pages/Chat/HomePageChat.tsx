import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    .filter((message) => message.fromId === userAuth?.id || message.toId == userAuth?.id)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  console.log('message.toId ', allMessages, userAuth?.id);

  const companionMessages = allMessages.filter((message) => message.fromId == userAuth?.id);

  // Получаем уникальные toId
  const uniqueToIds: number[] = Array.from(
    new Set(companionMessages.map((message) => message.toId)),
  );

  // Получаем массив уникальных пользователей
  const companionUsers: UserType[] = users.filter((user) => uniqueToIds.includes(user.id));
  console.log(1111, allMessages, companionMessages);

  useEffect(() => {
    dispatch(loadMessages()).catch(console.log);
  }, []);

  useEffect(() => {
    dispatch(loadUsers()).catch(console.log);
  }, []);

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
