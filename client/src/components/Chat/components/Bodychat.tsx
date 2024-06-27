import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const MessageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '50%', // Максимальная высота, чтобы контейнер не растягивался
  overflowY: 'auto', // Прокрутка по вертикали, если содержимое больше высоты
  padding: theme.spacing(2),
  backgroundColor: theme.palette.grey[200],
}));

const MessageBubble = styled(Paper)(({ theme, isSender }) => ({
  padding: theme.spacing(1),
  maxWidth: '70%',
  margin: theme.spacing(1),
  alignSelf: isSender ? 'flex-end' : 'flex-start',
  backgroundColor: isSender ? '#468966' : theme.palette.background.paper,
  color: isSender ? 'white' : 'inherit',
  position: 'relative',
}));

const MessageContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const DateTypography = styled(Typography)(({ theme }) => ({
  alignSelf: 'flex-end',
  fontSize: '0.8rem',
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
}));

function Bodychat({ users, toFromMessages, companionId, messages, status }): JSX.Element {
  const navigate = useNavigate();
  const theme = useTheme();
  const userCompain = users.find((user) => user.id === companionId);

  return (
    <MessageContainer theme={theme}>
      {toFromMessages.map((msg) =>
        msg.fromId !== companionId ? (
          <MessageBubble theme={theme} isSender key={msg.id}>
            <MessageContent>
              <Typography variant="body1">Вы:</Typography>
              <Typography variant="body1">{msg.message}</Typography>
              <DateTypography theme={theme}>
                {new Date(msg.createdAt).toLocaleString()}
              </DateTypography>
            </MessageContent>
          </MessageBubble>
        ) : (
          <MessageBubble theme={theme} key={msg.id}>
            <MessageContent>
              <Typography variant="body2">{userCompain.firstName}</Typography>
              <Typography variant="body1">{msg.message}</Typography>
              <DateTypography theme={theme}>
                {new Date(msg.createdAt).toLocaleString()}
              </DateTypography>
            </MessageContent>
          </MessageBubble>
        ),
      )}
    </MessageContainer>
  );
}

export default Bodychat;
