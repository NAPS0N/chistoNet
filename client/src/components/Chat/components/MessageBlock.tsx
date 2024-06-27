import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMessage } from '../../../App/redux/slicers/MessageSlicer';

function MessageBlock({ users, companionId, userAuth, socket }): JSX.Element {
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
      console.log(54321, { message, fromId: userAuth.id, toId: companionId });

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
        <input
          type="text"
          className="user-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={isTyping}
        />
        {error && <div className="error-message">{error}</div>} {/* Сообщение об ошибке */}
        <button type="submit">Отправить</button>
        <button type="button" className="btn" onClick={handleLeave}>
          Покинуть чат
        </button>
      </form>
    </div>
  );
}

export default MessageBlock;
