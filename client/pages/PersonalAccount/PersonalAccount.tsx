import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextsmsIcon from '@mui/icons-material/Textsms';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import { useAppDispatch, useAppSelector } from '../../src/App/redux/store';
import { loadProfileUser } from '../../src/App/redux/slicers/ProfileSlicer';
// import Avatar from '@mui/material/Avatar';

import { loadProductUser } from '../../src/App/redux/slicers/ProductSlice';
// import ProductItem from '../../src/components/Product/ProductItem';
import { useNavigate } from 'react-router-dom';
import { logOutThunk } from '../../src/App/redux/slicers/AuthSlicer';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: '',
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

export default function PersonalAccount() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectItem, setSelectItem] = React.useState<string>('controlPanel')

  React.useEffect(() => {
    dispatch(loadProfileUser()).catch(console.log);
    dispatch(loadProductUser()).catch(console.log);
  }, []);

  async function logOut () {
    await dispatch(logOutThunk()).catch(console.log);
    navigate('/');
  }

  const user = useAppSelector((store) => store.profileIndividual.user);
  // const userProfileIndividual = useAppSelector((store) => store.profileIndividual.individual);
  const productsUser = useAppSelector((store)=> store.products.products)

  return (
    <Box sx={{ flexGrow: 1, marginTop: '150px' }}>
      <Grid container spacing={2}>
        <Grid item xl={6} md={4}>
          <Item> {/* вставляем компоненты */}
            <Item onClick={() => setSelectItem('controlPanel')}><DashboardIcon fontSize="small"/> Панель управления</Item>
            <Item onClick={() => setSelectItem('myAd')}><ViewAgendaIcon fontSize="small"/> Мои объявления</Item>
            <Item onClick={() => setSelectItem('favorites')}><FavoriteIcon fontSize="small"/> Избранное</Item>
            <Item onClick={() => setSelectItem('chat')}><TextsmsIcon fontSize="small"/> Чат</Item>
            <Item onClick={() => setSelectItem('contact')}><ContactPageIcon fontSize="small"/> Контактная информация</Item>
            <Item onClick={() => logOut()}><ExitToAppIcon fontSize="small"/> Выйти</Item>
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
                  {/*
                   <div className='avatar'>
                    <Stack direction="row" spacing={2}>
                   
                     <Avatar
                       alt={user?.firstName}
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_gaxAkYYDw8UfNleSC2Viswv3xSmOa4bIAQ&s"
                     /> <p></p>
                     {/* заменить на userProfileIndividual.photo */}
                   {/* </Stack>
                   </div> */}
                      
                      {user?.firstName !== null || user?.lastName !== null && (
                        <h5>{`${user?.firstName} ${user?.lastName}`}</h5>
                      )}
                     <p>{user?.email}</p>

                     
                  
                   
 
                 </Item2>
               </Grid>
             </Grid>
             <br/>
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
                   <h5>5</h5>
                   </Item2>
               </Grid>
               <Grid item xs={8}>
                 <Item2>
                   <p>На проверке</p>
                   <h5>5</h5>
                   </Item2>
               </Grid>
               <Grid item xs={8}>
                 <Item2>
                   <p>Не активные объявления</p>
                   <h5>5</h5>
                   </Item2>
               </Grid>
             </Grid>
             </>
            )}
            {selectItem === 'myAd' && (
              // Заменить на то что ниже:
              // productsUser.map((productUser) => 
              // < ProductItem productUser={productUser} key={productUser.id}/>)
              <h1>КАРТОЧКИ ТОВАРОВ ПОЛЬЗОВАТЕЛЯ</h1>
            )}
            {selectItem === 'favorites' && (
              <h1>Избранные объявления</h1>
            )}
            {selectItem === 'chat' && (
              <h1>chat</h1>
            )}
             {selectItem === 'contact' && (
              <h1>контактная информация</h1>
            )}
          
           
          </Item2>
        </Grid>
      </Grid>
    </Box>
  );
}
