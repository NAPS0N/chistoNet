import React from 'react';
import { useNavigate } from 'react-router-dom';

function Bodychat({ users, toFromMessages, companionId, messages, status }): JSX.Element {
  const navigate = useNavigate();
  const userCompain = users.find((user) => user.id === companionId);
  return (
    <>
      <div className="container" style={{ backgroundColor: 'grey', height: '100%', width: '100%' }}>
        {toFromMessages.map((msg) =>
          msg.fromId !== companionId ? (
            <div className="chats" key={msg.id}>
              <p>Я</p>
              <div className="message-sender">
                <p>{msg.message}</p>
              </div>
            </div>
          ) : (
            <div className="chats" key={msg.id}>
              <p>{userCompain.firstName}</p>
              <div className="message-recipient">
                <p>{msg.message}</p>
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
