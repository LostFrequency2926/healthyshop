import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Product from './Product'
import ProductsData from '../dataProducts/ProductsData'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

//importamos y almacenamos las funciones de conexion a la DB para obtener los productos
//import {getProducts} from '../dbConection/dbTasks.js';

//const ProductsData2 = getProducts();

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
          ProductsData.map(product => (
            <Grid item xs={12} md={4} sm={6} lg={3}>
              <Product key={product.id} product={product}/>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
