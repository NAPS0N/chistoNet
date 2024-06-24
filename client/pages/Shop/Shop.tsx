import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './shopCss.css'
import { useAppDispatch, useAppSelector } from '../../src/App/redux/store';
import MapYandex from '../../src/components/Map/Map';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Shop(): JSX.Element {
    // разкомментировать когда будет настроено соединение с сервером

//     const dispatch = useAppDispatch();
//     React.useEffect(() => {
//         dispatch(loadProductShope()).catch(console.log) 
//     }, []);

const shop = useAppSelector((store) => store.shop); // указать точное свойство
const shopProduct = useAppSelector((store) => store.products); // указать точное свойство


  return (
    <>
    <div className='imgShop'>
        <img className='img' src='https://s1.kaercher-media.com/media/image/selection/166780/d0/Esli-moika-to-Kerkher-2024-ru.webp' alt='karcher'/>
    </div>
    <div>
        <h3>О магазине</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, delectus quia. Recusandae eaque ipsum perferendis dolorum ipsa, fugit eveniet dolor magnam necessitatibus consequatur inventore, sit hic! Blanditiis, nam vitae. Harum.</p>
    </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={4}>
          <Item>Меню</Item>
        </Grid>
        <Grid item xs={8}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {Array.from(Array(9)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <Item>Карточка товара</Item>
    </Grid>
  ))}
</Grid>

          
        </Grid>
      </Grid>
    </Box>
<br/>

<MapYandex/>
  
    </>
  );
}