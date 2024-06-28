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
import Modal from '@mui/material/Modal';
import UpdateShopForm from '../Shop/updateShopForm';
import CreateShopForm from '../Shop/createShopForm';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



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


// const [authModal, setAuthModal] = React.useState(false);

//========

export default function Shop(): JSX.Element {
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


  const dispatch = useAppDispatch();

  React.useEffect(() => {
    console.log("AAAAAAAAAAAAAA");
    
    dispatch(loadShop()).catch(console.log);
    dispatch(loadProductShop()).catch(console.log);
  }, []);

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
  const shop = useAppSelector((store) => store.shop.shop); // приходят
  console.log(777777, shop);
  
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

    {shop === null ? (
      <>
      <h6>Привет! Ты на странице магазина, давай его создадим!</h6>
      <ColorButton variant="contained" onClick={handleOpen}> 
      Создать магазин
          <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              > 
              <Box sx={style}>
              <CreateShopForm setOpen={setOpen}/>
              </Box>
                  </Modal>
         </ColorButton>
      </>
    ):
    (
      <>
      <div className="imgShop">
      <img className="img" src={shop.photo} alt={shop.description} />
      {user && (
         <ColorButton variant="contained" onClick={handleOpen}>
          Изменить
          <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              > 
              <Box sx={style}>
              <UpdateShopForm setOpen={setOpen}/>
              </Box>
                  </Modal>
         </ColorButton>
      )}
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
      </Grid>
    </Box>

    <br />
    <div>
    <h3>Контакты</h3>
    <p>{shop.address}</p>
    <p>тел: {shop.phoneNumber}</p>
    </div>

    <div className='map'>
      <YMaps>
<Map defaultState={{ center: [+`${shop.lax}`, +`${shop.lon}`], zoom: 12, }} width = {745} height = {400} >
  <Placemark defaultGeometry={[+`${shop.lax}`, +`${shop.lon}`]} />
</Map>
</YMaps>;
  </div>
        </>


    )
  }
    
     
    </>
  );
}
