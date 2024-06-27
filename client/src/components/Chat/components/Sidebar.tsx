import React, { useEffect, useState } from 'react';
import Chat from '../../../../pages/Chat/Chat';

function Sidebar({
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
      <h1> Sidebar</h1>
      <div>
        <Chat
          companionId={companionId}
          setCompanionId={setCompanionId}
          companionMessages={companionMessages}
          companionUsers={companionUsers}
        />
      </div>

      <h4>Users</h4>
      <div />
      <ul className="users" />
      {users.map((el) => (
        <li key={el.socketId}>{el.user}</li>
      ))}
    </div>
  );
}

export default Sidebar;
