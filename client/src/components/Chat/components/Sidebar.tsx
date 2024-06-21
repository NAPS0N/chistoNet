import React, { useEffect, useState } from 'react';

function Sidebar({ socket }): JSX.Element {
  // в нем выводятся активные пользователи
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    socket.on('responseNewUser', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="sidebar">
      <h1> Sidebar</h1>

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
