import * as React from 'react';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Movement from './Movement'
import MovementsData from '../dataMovements/MovementsData';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import TotalVentas from "./TotalVentas";

const useStyles = makeStyles(({ theme }) => ({
  boxcustom: {
    height: "100%",
    maxHeight: "100%"
  },
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
}))

export default function Movements() {

  const classes = useStyles();


  //Usamos el signo ? luego de baskket para poder evitar crash si el basket esta vacio 
  function FormRow() {
    return (
      <React.Fragment>

        {MovementsData.map(movement => (
          <Grid justifyContent="center" item xs={12} md={4} sm={6} lg={3}>
            <Movement key={movement.id} movement={movement} />
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            Ventas
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow></FormRow>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <TotalVentas />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}