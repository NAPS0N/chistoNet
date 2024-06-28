import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useAppDispatch, useAppSelector } from '../../../src/App/redux/store';
import { loadProfileUser } from '../../../src/App/redux/slicers/ProfileSlicer';
import ProductItem from '../../../src/components/Product/ProductItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProfileIndividual() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadProfileUser()).catch(console.log);
  }, []);

  const user = useAppSelector((store) => store.profileIndividual.user);
  const userProfileIndividual = useAppSelector((store) => store.profileIndividual.individual);
  const productsUser = useAppSelector((store)=> store.products.products.filter(product => product.userId === user?.id))

  

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <br></br>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xl={6} md={4}>
          <Item>
          <Item>{user?.firstName} {user?.lastName}</Item>
          </Item>
          
        </Grid>
        <Grid item xl={6} md={8}>
          <Item>
            <br></br>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={16}>
                {productsUser.map((product)=> 
                <ProductItem key={product.id} product={product}/>)}
              </Grid>
          
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
