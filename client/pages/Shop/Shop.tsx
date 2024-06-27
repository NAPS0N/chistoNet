import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './shopCss.css';
import { useAppDispatch, useAppSelector } from '../../src/App/redux/store';
// import MapYandex from '../../src/components/Map/Map';
import { loadShop } from '../../src/App/redux/slicers/ShopSlice';
import { loadProductShop } from '../../src/App/redux/slicers/ProductSlice';
import ProductItem from '../../src/components/Product/ProductItem';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import Button, { ButtonProps } from '@mui/material/Button';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Shop(): JSX.Element {
  const [formUpdate, setFormUpdate] = React.useState(false);
const [descript, setDescript] = React.useState('');


  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(loadShop()).catch(console.log);
    dispatch(loadProductShop()).catch(console.log);
  }, []);

  // const updatePhoto = async () => {
  //   await dispatch(updateImg()).catch(console.log)
  // }

  // const updateDescription = async () => {
    // await dispatch(updateShopDiscription()).catch(console.log);
  // }

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

  const user = useAppSelector((store) => store.auth.user);
  // const company = useAppSelector((store)=>store.company)
  const shop = useAppSelector((store) => store.shop.shop); // приходят
  const shopProducts = useAppSelector((store) => store.products.products); // приходят

  // нужно передать пропс в ProductItem после подкгрузки актуальных карточек
  function FormRow() {
    return (
      <React.Fragment>
        {shopProducts.map((product) => (
          <Grid item xs={4}>
              <ProductItem product={product} key={product.id} />
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <>
      <div className="imgShop">
        <img className="img" src={shop.photo} alt={shop.description} />
        {user && (
           <ColorButton variant="contained">
            Изменить
           </ColorButton>
        )}
      </div>
      <div>
        <h3>О магазине</h3>
        <p>{shop.description}</p>
        {user && (
           <ColorButton variant="contained" onClick={setFormUpdate(true)}>
            Изменить
           </ColorButton>
          //  {formUpdate === true & (
            
          //  )}
        )}
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>

      <br />
      <div>
      <h3>Контакты</h3>
      <p>{shop.address}</p>
      <p>тел: {shop.phoneNumber}</p>
      {user && (
           <ColorButton variant="contained">
            Изменить
           </ColorButton>
        )}
      </div>

      <div className='map'>
        <YMaps>
  <Map defaultState={{ center: [+`${shop.lax}`, +`${shop.lon}`], zoom: 12, }} width = {745} height = {400} >
    <Placemark defaultGeometry={[+`${shop.lax}`, +`${shop.lon}`]} />
  </Map>
</YMaps>;
    </div>
    </>
  );
}
