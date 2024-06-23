import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

function HomePageChat(): JSX.Element {
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
