import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import { loadSingleProduct } from '../../App/redux/slicers/ProductSlice';
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { UserType } from '../Auth/UserType';
import { useTheme } from '@emotion/react';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Product (): JSX.Element {
  const {id} = useParams()
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const products = useAppSelector((store)=> store.products.products)
  const singleProduct = products.find((product) => id ? product.id === +id : 'no id')
  
  
  const users: UserType[] | [] = useAppSelector((store) => store.auth.users);
  const user = users.find((foundUser) => singleProduct ? foundUser.id === singleProduct.userId : 'no product');
  


  const [activeStep, setActiveStep] = React.useState(0);


  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  console.log('0000000000000');
  const modalStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65vw',
    height: '75vh',
    bgcolor: '#f6f6f6',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'hidden',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(loadSingleProduct(Number(id)));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData().catch(console.log);
    console.log(fetchData(), 'fetchData()')
  }, [dispatch, id]);
  console.log(singleProduct, 'singleProduct');



  return (
    <div>
      {singleProduct ? (
        <Box sx={modalStyle}>
        <Card sx={{ width: '100%', height: '100%', margin: '1em', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', bgcolor: '#f6f6f6', boxShadow: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {singleProduct.ProductImgs.map((step, index) =>
                  <div key={step.id}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: 468,
                          display: 'block',
                          width: 500,
                          overflow: 'hidden',
                          width: '100%',
                          borderRadius: 5,
                          marginLeft: '7%',
                          boxShadow: 3,
                        }}
                        src={step.img}
                        alt='Тута что-то есть'
                      />
                    ) : null}
                  </div>
                )}
              </AutoPlaySwipeableViews>
              
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Box sx={{ position: 'absolute', top: 0, right: 0, bgcolor: 'white', color: 'black', px: 2, py: 1, margin: 2, boxShadow: 3 }}>
                <Typography variant="h6" component="div" sx={{color:'black'}}>
                  {singleProduct.price} ₽
                </Typography>
              </Box>
              <CardContent sx={{ textAlign: 'center', width: '100%', bgcolor: 'white', m: 2, boxShadow: 3, px: 2, py: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {singleProduct.title}
                </Typography>
                </CardContent>
                <CardContent sx={{ textAlign: 'center', width: '100%', bgcolor: 'white', p: 2, mb: 2, boxShadow: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  <h5>Контактная информация</h5>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user ? user.phoneNumber : 'Буденко 5, Черемушки мкр, Краснодар'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user ? user.email : 'Буденко 5, Черемушки мкр, Краснодар'}
                </Typography>
              </CardContent>
              <CardContent sx={{ textAlign: 'center', width: '100%', bgcolor: 'white', p: 2, my: 5, boxShadow: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  {singleProduct.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small" color="primary" startIcon={<WhatsAppIcon />}>
                  WhatsApp
                </Button>
                <Button size="small" color="primary" startIcon={<TelegramIcon />}>
                  Telegram
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Box>
        ) : 'no product' }
     
    </div>
  );
}

export default Product;