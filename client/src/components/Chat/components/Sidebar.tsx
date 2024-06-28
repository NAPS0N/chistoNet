import React, { useEffect, useState } from 'react';
import Chat from '../../../../pages/Chat/Chat';

function Sidebar({
  setIsOpen,
  companionId,
  setCompanionId,
  socket,
  companionMessages,
  companionUsers,
}): JSX.Element {
  // в нем выводятся активные пользователи
  const [users, setUsers] = useState([]);
  console.log(companionId);

  useEffect(() => {
    socket.on('responseNewUser', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="sidebar">
      <h1> Чаты</h1>
      <div>
        <Chat
          setIsOpen={setIsOpen}
          companionId={companionId}
          setCompanionId={setCompanionId}
          companionMessages={companionMessages}
          companionUsers={companionUsers}
        />
      </div>
    </div>
  );
}

export default Sidebar;
