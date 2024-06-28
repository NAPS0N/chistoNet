import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { UserType } from '../../src/components/Auth/UserType';

function ChatRoom({ companionUser }: {companionUser:UserType}): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
        width: 500,
        backgroundColor: 'red',
        padding: 2,
        boxSizing: 'border-box',
      }}
    >
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Stack>
      <div>{companionUser?.firstName}</div>
    </Box>
  );
}

export default ChatRoom;
