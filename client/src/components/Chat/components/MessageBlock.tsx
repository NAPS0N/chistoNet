import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createMessage } from '../../../App/redux/slicers/MessageSlicer';

function MessageBlock({ companionId, userAuth, socket }): JSX.Element {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const dispatchMsg = useDispatch();

  // для отображения печатания
  const isTyping = () => socket.emit('typing', `${localStorage.getItem('user')} is typing`);

  const handleSend = (e): void => {
    e.preventDefault();
    if (message.trim()) {
      // с помощью метода emit мы генерируем новое событие
      socket.emit('message', {
        text: message,
        name: userAuth.firstName,
        id: `${socket.id}-${Math.random()}`, // Math random для уникального ключа сообщения в DOM дереве
        socketId: socket.id,
      });

      dispatchMsg(createMessage({ message, fromId: userAuth.id, toId: companionId })).catch(
        console.log,
      );

      setMessage('');
      setError(''); // Сброс ошибки
    } else {
      setError('Сообщение не может быть пустым');
    }
  };

  // покинуть чат
  const handleLeave = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="message-block">
      <form className="message-form" onSubmit={handleSend}>
        <TextField
          type="text"
          className="user-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={isTyping}
          variant="outlined"
          fullWidth
          label="Введите сообщение"
        />
        {error && <div className="error-message">{error}</div>} {/* Сообщение об ошибке */}
        <Button type="submit" variant="contained" sx={{ bgcolor: '#468966', color: '#ffffff' }}>
          Отправить
        </Button>
      </form>
    </div>
  );
}

export default MessageBlock;
