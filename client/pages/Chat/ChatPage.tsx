import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Box from '@mui/material/Box';


import { Grid } from '@mui/material';

import Sidebar from '../../src/components/Chat/components/Sidebar';
import Bodychat from '../../src/components/Chat/components/Bodychat';
import MessageBlock from '../../src/components/Chat/components/MessageBlock';


const socket = io('http://localhost:5000');

function Chat({ users, userAuth, myMessages, companionMessages, companionUsers }): JSX.Element {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState([]);
  const [companionId, setCompanionId] = useState(null);

  const toFromMessages = myMessages.filter(
    (msg) => msg.fromId === companionId || msg.toId === companionId,
  );

  useEffect(() => {
    socket.on('responseTyping', (data) => {
      setStatus(data);
      setTimeout(() => setStatus(''), 2000);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, height: '100vh', gap: 5, mt: 10 }}>
      <Grid container sx={{ height: '80%' }}>
        <Grid item xs={12} md={4}>
          <Sidebar
            companionId={companionId}
            setCompanionId={setCompanionId}
            socket={socket}
            companionMessages={companionMessages}
            companionUsers={companionUsers}
          />
        </Grid>
        <Grid item xs={12} md={8} container direction="column" justifyContent="space-between">
          <Grid item sx={{ flexGrow: 1, overflow: 'auto' }}>
            <Bodychat
              users={users}
              toFromMessages={toFromMessages}
              companionId={companionId}
              messages={messages}
              status={status}
            />
          </Grid>
          <Grid item>
            <MessageBlock companionId={companionId} userAuth={userAuth} socket={socket} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Chat;
