import React from 'react';
import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Box, Paper, Typography, MobileStepper, Button, Modal, Card, CardMedia, CardContent, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Height, KeyboardArrowLeft, KeyboardArrowRight, Telegram, WhatsApp } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { Carousel } from 'antd';
import ProductImg from '../ProductImg/ProductImg';
import type { ProductType } from './ProductType';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import SwipeableTextMobileStepper from './ProductSlide';
import type { UserType } from '../Auth/UserType';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

function ProductCard({ product }: { product: ProductType }): JSX.Element {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const users: UserType[] | [] = useAppSelector((store) => store.auth.users);
  const user = users.find((user) => user.id === product.userId);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = product.ProductImgs.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <Button onClick={handleOpen}><Typography>{product.title}</Typography></Button>

      <Box sx={{ width: 800, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        />
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {product.ProductImgs.map((step, index) =>
            <div key={step.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 768,
                    display: 'block',
                    maxWidth: 1024,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.img}
                  alt='Тута что-то есть'
                />
              ) : null}
            </div>
          )}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
                  {product.ProductImgs.map((step, index) =>
                    <div key={step.id}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                          component="img"
                          sx={{
                            height: 468,
                            display: 'block',
                            maxWidth: 500,
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
                <Box sx={{ position: 'absolute', top: 0, right: 0, bgcolor: 'black', color: 'white', px: 2, py: 1, margin: 2, boxShadow: 3 }}>
                  <Typography variant="h6" component="div">
                    {product.price} ₽
                  </Typography>
                </Box>
                <CardContent sx={{ textAlign: 'center', width: '100%', bgcolor: 'white', m: 2, boxShadow: 3, px: 2, py: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
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
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button size="small" color="primary" startIcon={<WhatsApp />}>
                    WhatsApp
                  </Button>
                  <Button size="small" color="primary" startIcon={<Telegram />}>
                    Telegram
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Modal>
    </>
  );
}

export default ProductCard;