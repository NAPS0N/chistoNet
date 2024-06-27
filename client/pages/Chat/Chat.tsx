import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow:
    '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  margin: theme.spacing(1, 0),
}));

function Chat({ setIsOpen, setCompanionId, companionUsers }): JSX.Element {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {companionUsers.map(({ id, firstName, lastName }, index) => (
          <StyledListItemButton
            key={id}
            onClick={() => {
              setCompanionId(id);
              setIsOpen((prev) => !prev);
            }}
          >
            <ListItemAvatar>
              <Avatar>{firstName.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={firstName} secondary={lastName} />
          </StyledListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default Chat;
