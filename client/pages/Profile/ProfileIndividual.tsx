import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useAppDispatch } from '../../src/App/redux/store';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProfileIndividual() {

    const dispatch = useAppDispatch();

React.useEffect(()=> {
dispatch(loadProfileUser()).catch(console.log)
}, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xl={6} md={4}>
          <Item>Меню навигации по личному кабинету</Item>
        </Grid>
        <Grid item xl={6} md={8}>
          <Item>
          <Grid container spacing={2} columns={16}>
  <Grid item xs={8} >
    <Item>Информация о пользователе
        Почта и выбранная роль
    </Item>
  </Grid>
</Grid>
<br></br>
<Grid container spacing={2} columns={16}>
  <Grid item xs={8} >
    <Item>Всего объявлений</Item>
  </Grid>
  <Grid item xs={8} >
    <Item>кол-во Опубликуванные объявления</Item>
  </Grid>
  <Grid item xs={8} >
    <Item>На проверке кол-во</Item>
  </Grid>
  <Grid item xs={8} >
    <Item>Не активные объявления</Item>
  </Grid>
</Grid>

          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
