import React from 'react';
import { useNavigate } from 'react-router-dom';

function Bodychat({ messages, status }): JSX.Element {
  const navigate = useNavigate();
  // покинуть чат

  return (
    <>
      <div className="container" style={{ backgroundColor: 'grey', height: '100%', width: '100%' }}>
        {messages.map((el) =>
          el.name === localStorage.getItem('user') ? (
            <div className="chats" key={el.id}>
              <p>Я</p>
              <div className="message-sender">
                <p>{el.text}</p>
              </div>
            </div>
          ) : (
            <div className="chats" key={el.id}>
              <p>{el.name}</p>
              <div className="message-recipient">
                <p>{el.text}</p>
              </div>
            </div>
          ),
        )}
      </div>
      <div className="status">
        <p>{status}</p>
      </div>
    </>
  );
}

export default Bodychat;
