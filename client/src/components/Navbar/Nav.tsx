import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import type { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import { Link, useParams } from 'react-router-dom';
import './Nav.css';
import '@fontsource/roboto/400.css';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Modal from '@mui/material/Modal';
import PersonIcon from '@mui/icons-material/Person';
import Login from '../Auth/Login';
import Registration from '../Auth/Registration';
import { useAppSelector } from '../../App/redux/store';

// modal
const style = {
  position: 'absolute' as const,
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

function Nav(): JSX.Element {
  const user = useAppSelector(store => store.auth.user);

  // Modal
  const [authModal, setAuthModal] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorElProducts, setAnchorElProducts] = React.useState<null | HTMLElement>(null);
  const [anchorElEquipment, setAnchorElEquipment] = React.useState<null | HTMLElement>(null);

  const handleMouseEnterProducts = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handleMouseLeaveProducts = () => {
    setAnchorElProducts(null);
  };

  const handleMouseEnterEquipment = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElEquipment(event.currentTarget);
  };

  const handleMouseLeaveEquipment = () => {
    setAnchorElEquipment(null);
  };

  const { id } = useParams();

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
              <Link to="/" className="menuLink">
                ChistoNet
              </Link>
            </Typography>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
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
              onMouseEnter={handleMouseEnterProducts}
            >
              <Link to="/products" className="menuLink">
                Товары
              </Link>
            </Typography>

            <Menu
              anchorEl={anchorElProducts}
              open={Boolean(anchorElProducts)}
              onClose={handleMouseLeaveProducts}
              MenuListProps={{
                onMouseEnter: handleMouseEnterProducts,
                onMouseLeave: handleMouseLeaveProducts,
              }}
            >
              <Link to="/products/categories/5" className="menuLink">
                <MenuItem onClick={handleMouseLeaveProducts}>Инвентарь</MenuItem>
              </Link>
              <Link to="/products/categories/6" className="menuLink">
                <MenuItem onClick={handleMouseLeaveProducts}>Расходные материалы</MenuItem>
              </Link>
              <Link to="/products/categories/7" className="menuLink">
                <MenuItem onClick={handleMouseLeaveProducts}>Моющие средства</MenuItem>
              </Link>
            </Menu>

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
              onMouseEnter={handleMouseEnterEquipment}
            >
              <Link to="/products" className="menuLink">
                Оборудование
              </Link>
            </Typography>

            <Menu
              anchorEl={anchorElEquipment}
              open={Boolean(anchorElEquipment)}
              onClose={handleMouseLeaveEquipment}
              MenuListProps={{
                onMouseEnter: handleMouseEnterEquipment,
                onMouseLeave: handleMouseLeaveEquipment,
              }}
            >
              <MenuItem onClick={handleMouseLeaveEquipment}>Пылесос</MenuItem>
              <MenuItem onClick={handleMouseLeaveEquipment}>Химчистка</MenuItem>
              <MenuItem onClick={handleMouseLeaveEquipment}>Парогенератор</MenuItem>
              <MenuItem onClick={handleMouseLeaveEquipment}>Роторная машина</MenuItem>
              <MenuItem onClick={handleMouseLeaveEquipment}>Мойка высокого давления</MenuItem>
              <MenuItem onClick={handleMouseLeaveEquipment}>Поломоечная машина</MenuItem>
            </Menu>

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
              <Link to="/news" className="menuLink">
                Новости
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
                    <Login setOpen={setOpen} />
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
          ) : (
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
                <Link to="/homepagechat" className="menuLink">
                  <QuestionAnswerIcon />
                </Link>
              </Typography>

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