import React, { useState } from 'react';

function MessageBlock({ socket }): JSX.Element {
  const [message, setMessage] = useState('');

  // для отображения печатания
  const isTyping = () => socket.emit('typing', `${localStorage.getItem('user')} is typing`);

  const handleSend = (e): void => {
    e.preventDefault();
    if (message.trim() && localStorage.getItem('user')) {
      // с помощью метода emit мы генерируем новое событие
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('user'),
        id: `${socket.id}-${Math.random()}`, // Math random для уникального ключа сообщения в DOM дереве
        socketId: socket.id,
      });

      console.log({
        user: localStorage.getItem('user'),
        message,
      });

      setMessage('');
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
        <button type="submit">Отправить</button>
        <button type="button" className="btn" onClick={handleLeave}>
          Покинуть чат
        </button>
      </form>
    </div>
  );
}

export default MessageBlock;
