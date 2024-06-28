import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Sidebar from '../../src/components/Chat/components/Sidebar';
import Bodychat from '../../src/components/Chat/components/Bodychat';
import MessageBlock from '../../src/components/Chat/components/MessageBlock';

const socket = io('http://localhost:5000');

function Chat({ users, userAuth, myMessages, companionMessages, companionUsers }): JSX.Element {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState([]);
  const [companionId, setCompanionId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toFromMessages = myMessages.filter(
    (msg) => msg.fromId === companionId || msg.toId === companionId,
  );

  useEffect(() => {
    socket.on('responseTyping', (data) => {
      setStatus(data);
      setTimeout(() => setStatus(''), 2000);
    });

    socket.on('message', (msg) => {
      console.log(12345678);

      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('responseTyping');
      socket.off('message');
    };
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 1,
        boxShadow: 3,
        padding: 5,
      }}
    >
      <Grid container sx={{ height: '100%' }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            borderRight: '1px solid #e0e0e0',
            position: 'relative',
            height: '50vh',
          }}
        >
          <Sidebar
            setIsOpen={setIsOpen}
            companionId={companionId}
            setCompanionId={setCompanionId}
            socket={socket}
            companionMessages={companionMessages}
            companionUsers={companionUsers}
          />
        </Grid>
        {isOpen && (
          <Grid item xs={12} md={8} container direction="column">
            <Grid
              item
              sx={{
                maxHeight: '100vh',
                flexGrow: 1,
                overflow: 'auto',
                padding: 2,
                position: 'relative',
              }}
            >
              <Bodychat
                users={users}
                toFromMessages={toFromMessages}
                companionId={companionId}
                messages={messages}
                status={status}
              />
              <MessageBlock companionId={companionId} userAuth={userAuth} socket={socket} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default Chat;
