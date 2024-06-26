import React from 'react';
import { IconButton, InfoIcon, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Box, Paper, Typography, MobileStepper, Button, Modal, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { Height, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import  ProductImg  from '../ProductImg/ProductImg';
import type { ProductType } from './ProductType';
import { useAppDispatch, useAppSelector } from '../../App/redux/store';
import SwipeableTextMobileStepper from './ProductSlide';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95vw',
  height: '95vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


 
function ProductCard({product} :{product: ProductType}): JSX.Element {
  

  const dispatch = useAppDispatch();
  const products = useAppSelector((store)=> store.products.products)
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
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
        <div key={step.alt}>
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
    <Modal open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    // style={{width: "900px"}}
  >
     <Card sx={style}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.title}
        </Typography>
        <div>
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
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
      >
        <Typography>{product.ProductImgs[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {product.ProductImgs.map((step, index) => (
          <div key={step.alt}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.img}
                alt='Тута что-то есть'
              />
            ) : null}
          </div>
        ))}
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
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="h6">
          ${product.price}
        </Typography>
        <Button variant="contained" color="primary">
          Добавить в корзину
        </Button>
      </CardContent>
      
    </Card>
   {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
    </Modal>
   </>
   
  );
}

export default ProductCard;