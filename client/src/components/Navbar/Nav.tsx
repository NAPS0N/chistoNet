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
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, Outlet, useParams } from 'react-router-dom';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import './Nav.css';
import '@fontsource/roboto/400.css';
import { makeStyles } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Modal from '@mui/material/Modal';
import Login from '../Auth/Login';
import Registration from '../Auth/Registration';
import { useAppSelector } from '../../App/redux/store';
import PersonIcon from '@mui/icons-material/Person';

// moodal
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#468866'),
  backgroundColor: '#468866',
  '&:hover': {
    backgroundColor: '#46a966',
  },
}));
//========

const pages = [
  { title: 'Товары', path: '/products' },
  { title: 'Оборудование', path: '/products' },
  { title: 'Аренда', path: '/products' },
  { title: 'Вакансии', path: '/vacancies' },
  { title: 'Новости', path: '/news' },
  { title: 'Чатик', path: '/chat' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Nav(): JSX.Element {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const user = useAppSelector(store=>store.auth.user);

  //Modal
  const [authModal, setAuthModal] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //========

  const { id } = useParams();
  console.log(id, 'id');

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
    <AppBar position="fixed" className="menuColor">
      <Container maxWidth="fix" className="menuColor">
        <Toolbar
          disableGutters
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="../../../public/logo/240х400.png"
              alt=""
              style={{ width: '45px', height: '50px', padding: '0 10px 0 0' }}
            />

            <Typography
              variant="h6"
              noWrap
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                fontFamily: 'Nunito',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              <Link to="/home" className="menuLink">
                ChistoNet
              </Link>
            </Typography>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <>
                  <Typography
                    variant="h6"
                    noWrap
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
                    <Link
                      to="/products"
                      className="menuLink"
                      variant="contained"
                      {...bindTrigger(popupState)}
                    >
                      Товары
                    </Link>
                  </Typography>

                  <Menu {...bindMenu(popupState)}>
                    <Link to="/products/categories/5">
                      <MenuItem onClick={popupState.close}>Инвентарь</MenuItem>
                    </Link>
                    <Link to="/products/categories/6">
                      <MenuItem onClick={popupState.close}>Расходные материалы</MenuItem>
                    </Link>
                    <Link to="/products/categories/7">
                      <MenuItem onClick={popupState.close}>Моющие средства</MenuItem>
                    </Link>
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
                    <Link
                      to="/products"
                      className="menuLink"
                      variant="contained"
                      {...bindTrigger(popupState)}
                    >
                      Оборудование
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

            <Typography
              variant="h6"
              noWrap
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
              <Link to="/products" className="menuLink">
                Аренда
              </Link>
            </Typography>

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
              <Link to="/products" className="menuLink">
                Вакансии
              </Link>
            </Typography>

            <Typography
              variant="h6"
              noWrap
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

              <Link to="/chatroom" className="menuLink">
                Chatroom
              </Link>
            </Typography>
            <Typography
              variant="h6"
              noWrap
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
              <Link to="/chat" className="menuLink">
                <QuestionAnswerIcon />
              </Link>
            </Typography>
      
          </div>


             {!user ? (
                <ColorButton variant="contained" onClick={handleOpen}>
                Войти{' '}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  {authModal === false ? (
                    <Box sx={style}>
                      <Login setOpen={setOpen}/>
                      ⠀⠀ Если у вас еще нет аккаунта, пожалуйста{' '}
                      <Link to="" onClick={() => setAuthModal(true)}>
                        зарегистрируйтесь!
                      </Link>
                    </Box>
                  ) : (
                    <Box sx={style}>
                      <Registration setOpen={setOpen} />
                    </Box>
                  )}
                </Modal>
              </ColorButton>
             )
            :
            (
              <>
              {/* <Typography
              variant="h6"
              noWrap
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
              <Link to="/homepagechat" className="menuLink">
                <QuestionAnswerIcon />
              </Link>
            </Typography> */}

              <Link to="/personalaccaunt" className="menuLink">
                <PersonIcon />
              </Link>
              </>
            )} 

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
