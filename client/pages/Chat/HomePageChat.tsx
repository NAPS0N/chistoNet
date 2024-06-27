import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../src/App/redux/store';
import { loadMessages } from '../../src/App/redux/slicers/MessageSlicer';
import { loadUsers } from '../../src/App/redux/slicers/AuthSlicer';
import ChatRoom from './ChatRoom';
import type { UserType } from '../../src/components/Auth/UserType';
import Chat from './Chat';

function HomePageChat(): JSX.Element {
  // достаю все сообщения
  const userAuth: UserType | null = useAppSelector((state) => state.auth.user);
  const users: UserType[] | [] = useAppSelector((state) => state.auth.users);

  const dispatch = useAppDispatch();
  const allMessages = useAppSelector((state) => state.message.chatMessages);

  const userMessages = allMessages.filter((message) => message.fromId === userAuth?.id); // это сообщения от user 1 к user 2
  console.log(11111, userMessages);
  const companionMessages = allMessages.filter((message) => message.toId === userAuth?.id);
  console.log(2222, companionMessages);
  // Получаем уникальные toId
  const uniqueToIds = Array.from(new Set(companionMessages.map((message) => message.fromId)));
  console.log(3333, uniqueToIds);

  // Получаем массив уникальных пользователей
  const companionUsers = users.filter((user) => uniqueToIds.includes(user.id));

  console.log(4444, companionUsers);

  useEffect(() => {
    dispatch(loadMessages()).catch(console.log);
  }, []);

  useEffect(() => {
    dispatch(loadUsers()).catch(console.log);
  }, []);

  const socket = io('http://localhost:5000');

  const navigate = useNavigate();
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // положить данные в localStorage
    localStorage.setItem('user', user);

    // делаем много пользователей

    socket.emit('newUser', { user, socketId: socket.id });

    navigate('/chat');
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <h2>Вход в чат</h2>

        <label htmlFor="user" />
        <input type="text" id="user" value={user} onChange={(e) => setUser(e.target.value)} />
        <button type="submit">Войти</button>
      </form>
      <div>
        {companionUsers.map((companionUser) => (
          <ChatRoom companionUser={companionUser} companionMessages={companionMessages} />
        ))}
      </div>
      <div>
        <Chat companionMessages={companionMessages} />
      </div>
    </Box>
  );
}

export default HomePageChat;
