import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './shopCss.css'
import { useAppDispatch, useAppSelector } from '../../src/App/redux/store';
import MapYandex from '../../src/components/Map/Map';
import { loadShop } from '../../src/App/redux/slicers/ShopSlice';
import { loadProductShop } from '../../src/App/redux/slicers/ProductSlice';
import ProductItem from '../../src/components/Product/ProductItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




export default function Shop(): JSX.Element {

    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(loadShop()).catch(console.log);
        dispatch(loadProductShop()).catch(console.log) 
    }, []);

    const shop = useAppSelector((store) => store.shop.shop); // приходят
    const shopProducts = useAppSelector((store)=> store.products.products) // приходят

// нужно передать пропс в ProductItem после подкгрузки актуальных карточек
    function FormRow() {
      return (
        <React.Fragment>
          {shopProducts.map((shopProduct)=> 
            <Grid item xs={4}> 
            <Item><ProductItem shopProduct={shopProduct} key={shopProduct.id}/></Item>
          </Grid>
          )}
          </React.Fragment>
      );
    }

  return (
    <>
    <div className='imgShop'>
        <img className='img' src={shop.photo} alt={shop.description}/>
    </div>
    <div>
        <h3>О магазине</h3>
        <p>{shop.description}</p>
    </div>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>

<br/>
<h3>Адрес</h3>
<p>{shop.address}</p>
<MapYandex shop={shop}/>
  
    </>
  );
}