import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../src/App/redux/store';
import { loadMessages } from '../../src/App/redux/slicers/MessageSlicer';

function HomePageChat(): JSX.Element {
  // достаю все сообщения
  const userAuth = useAppSelector((state) => state.auth.user);

  console.log('22222', userAuth);

  const dispatch = useAppDispatch();
  const allMessages = useAppSelector((state) => state.message.chatMessages);

  const userMessages = allMessages.filter((message) => message.fromId === userAuth?.id);
  const companionMessages = allMessages.filter((message) => message.toId === userAuth?.id);

  useEffect(() => {
    dispatch(loadMessages()).catch(console.log);
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
    <form onSubmit={handleSubmit}>
      <h2>Вход в чат</h2>

      <label htmlFor="user" />
      <input type="text" id="user" value={user} onChange={(e) => setUser(e.target.value)} />
      <button type="submit">Войти</button>
    </form>
  );
}

export default HomePageChat;
