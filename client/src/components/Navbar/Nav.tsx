import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, Outlet } from 'react-router-dom';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const pages = [
  {title: 'Товары', path: '/products'}, 
  {title: 'Вакансии', path: '/vacancies'},
  {title: 'Новости', path: '/news'}
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Nav(): JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ChistoNet
          </Typography>
        <PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <>
                <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
      <Link to='/products' variant="contained" {...bindTrigger(popupState)}>
        Продукты
      </Link>
          </Typography>

      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Инвентарь</MenuItem>
        <MenuItem onClick={popupState.close}>Расходные материалы</MenuItem>
        <MenuItem onClick={popupState.close}>Моющие средства</MenuItem>
      </Menu>
    </>
  )}
    </PopupState>

    <PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <>
                <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
      <Link to='/products' variant="contained" {...bindTrigger(popupState)}>
        Оборудование
      </Link>
          </Typography>

      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Новое</MenuItem>
        <MenuItem onClick={popupState.close}>Б/У</MenuItem>
      </Menu>
    </>
  )}
    </PopupState>

    <PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <>
                <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
      <Link to='/products' variant="contained" {...bindTrigger(popupState)}>
        Аренда
      </Link>
          </Typography>

      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Пылесос</MenuItem>
        <MenuItem onClick={popupState.close}>Химчистка</MenuItem>
        <MenuItem onClick={popupState.close}>Парогенератор</MenuItem>
        <MenuItem onClick={popupState.close}>Роторная машина</MenuItem>
        <MenuItem onClick={popupState.close}>Мойка высокого давления</MenuItem>
        <MenuItem onClick={popupState.close}>Поломоечная машина</MenuItem>
      </Menu>
    </>
  )}
    </PopupState>

    <PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <>
                <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
      <Link to='/products' variant="contained" {...bindTrigger(popupState)}>
        Работа
      </Link>
          </Typography>

      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Вакансии</MenuItem>
      </Menu>
    </>
  )}
    </PopupState>
    <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
      <Link to='/products'>
        Новости
      </Link>
          </Typography>
          <Box>
            <Link to='/login'><Button color='inherit' variant='outlined'>Войти </Button></Link>
            
          </Box>
          <Box>
            <Link to='/reg'><Button color='inherit' > Зарегестрироваться </Button></Link>
          </Box>
        </Toolbar>
      </Container>
    
    </AppBar>
  );
}
export default Nav;