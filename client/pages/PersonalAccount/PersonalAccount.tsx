import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextsmsIcon from '@mui/icons-material/Textsms';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ContactPageIcon from '@mui/icons-material/ContactPage';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import StoreIcon from '@mui/icons-material/Store';
// import BusinessIcon from '@mui/icons-material/Business';
import { useAppDispatch, useAppSelector } from '../../src/App/redux/store';
import { loadProfileUser } from '../../src/App/redux/slicers/ProfileSlicer';
// import Avatar from '@mui/material/Avatar';

// import { loadProductUser } from '../../src/App/redux/slicers/ProductSlice';
// import ProductItem from '../../src/components/Product/ProductItem';
import { useNavigate } from 'react-router-dom';
import { logOutThunk } from '../../src/App/redux/slicers/AuthSlicer';
import ProductItem from '../../src/components/Product/ProductItem';
import Shop from '../Shop/Shop';
import Button, { ButtonProps } from '@mui/material/Button';
import { Modal } from '@mui/material';
import CreateProductForm from '../../src/components/Product/createProductForm';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: '#ffffff',
  background: '#1c1d20',
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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


  //Настройки кнопок
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#468866'),
    backgroundColor: '#468866',
    '&:hover': {
      backgroundColor: '#46a966',
    },
    margin: '10px'
  }));
  //=======

export default function PersonalAccount() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectItem, setSelectItem] = React.useState<string>('controlPanel');

  const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  React.useEffect(() => {
    dispatch(loadProfileUser()).catch(console.log);
    // dispatch(loadProductUser()).catch(console.log);
  }, []);

  async function logOut() {
    await dispatch(logOutThunk()).catch(console.log);
    navigate('/');
  }

  const user = useAppSelector((store) => store.profileIndividual.user);
  // const userProfileIndividual = useAppSelector((store) => store.profileIndividual.individual);
  const productsUser = useAppSelector((store) =>
    store.products.products.filter((product) => product.userId === user?.id),
  );

  function FormRow() {
    return (
      <React.Fragment>
        {productsUser.map((product) => (
          <Grid item xs={4}>
            <ProductItem product={product} key={product.id} />
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: '150px' }}>
      <Grid container spacing={2}>
        <Grid item xl={8} md={3}>
          <Item>
            {' '}
            {/* вставляем компоненты */}
            <Item onClick={() => setSelectItem('controlPanel')}>
              <DashboardIcon fontSize="small" /> Панель управления
            </Item>
            <Item onClick={() => setSelectItem('myAd')}>
              <ViewAgendaIcon fontSize="small" /> Мои объявления
            </Item>
            {/* <Item onClick={() => setSelectItem('favorites')}>
              <FavoriteIcon fontSize="small" /> Избранное
            </Item> */}
            <Item onClick={() => setSelectItem('chat')}>
              <TextsmsIcon fontSize="small" /> Чат
            </Item>
            {/* <Item onClick={() => setSelectItem('contact')}>
              <ContactPageIcon fontSize="small" /> Контактная информация
            </Item> */}
            {/* <Item onClick={() => setSelectItem('company')}>
              <BusinessIcon fontSize="small" /> Компания
            </Item> */}
            <Item onClick={() => setSelectItem('shop')}>
              <StoreIcon fontSize="small" /> Магазин
            </Item>
            <Item onClick={() => logOut()}>
              <ExitToAppIcon fontSize="small" /> Выйти
            </Item>
          </Item>
        </Grid>

        <Grid item xl={6} md={8}>
          <Item2>
            <br></br>
            {selectItem === 'controlPanel' && (
              <>
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={8}>
                    <Item2>
                      {user?.firstName !== null ||
                        (user?.lastName !== null && (
                          <h5>{`${user?.firstName} ${user?.lastName}`}</h5>
                        ))}
                      <p>{user?.email}</p>
                    </Item2>
                  </Grid>
                </Grid>

                <br />
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={8}>
                    <Item2>
                      <p>Всего объявлений</p>
                      <h5>{productsUser.length}</h5>
                    </Item2>
                  </Grid>
                  <Grid item xs={8}>
                    <Item2>
                      <p>Опубликуванные объявления</p>
                      <h5>3</h5>
                    </Item2>
                  </Grid>
                  <Grid item xs={8}>
                    <Item2>
                      <p>На проверке</p>
                      <h5>3</h5>
                    </Item2>
                  </Grid>
                  <Grid item xs={8}>
                    <Item2>
                      <p>Не активные объявления</p>
                      <h5>0</h5>
                    </Item2>
                  </Grid>
                </Grid>
              </>
            )}

            {selectItem === 'myAd' && (
              <Box sx={{ flexGrow: 1, marginLeft: 30 }}>
                <Grid container spacing={1}>
                  <Grid container item spacing={3}>
                  <ColorButton variant="contained" onClick={handleOpen}>
                  Добавить объявление
          <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              > 
              <Box sx={style}>
              <CreateProductForm setOpen={setOpen}/>
              </Box>
                  </Modal>
         </ColorButton>
                    <FormRow />
                  </Grid>
                </Grid>
              </Box>
            )}
            {/* {selectItem === 'favorites' && <h1>Избранные объявления</h1>} */}
            {selectItem === 'chat' && <h1>chat</h1>}
            {/* {selectItem === 'contact' && <h1>контактная информация</h1>} */}
            {/* {selectItem === 'company' && <h1>Компания</h1>} */}
            {selectItem === 'shop' && <Shop />}
          </Item2>
        </Grid>
      </Grid>
    </Box>
  );
}
