import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Grid } from '@mui/material';
import Sidebar from '../../src/components/Chat/components/Sidebar';
import Bodychat from '../../src/components/Chat/components/Bodychat';
import MessageBlock from '../../src/components/Chat/components/MessageBlock';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const socket = io('http://localhost:5000');

function Chat(): JSX.Element {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    socket.on('response', (data) => {
      console.log(777, 'ChatPage', data);

      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);

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
          <Sidebar socket={socket} />
        </Grid>
        <Grid item xs={12} md={8} container direction="column" justifyContent="space-between">
          <Grid item sx={{ flexGrow: 1, overflow: 'auto' }}>
            <Bodychat messages={messages} status={status} />
          </Grid>
          <Grid item>
            <MessageBlock socket={socket} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Chat;
