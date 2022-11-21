import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CheckoutCard from './CheckoutCard';
// import Total from './Total';
// import ProductsData from '../dataProducts/ProductsData';
import Total from "./Total";
// import Product from './Product'
// import { Form } from "react-bootstrap";

//Consumir el state value general
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
    },
}));

const CheckoutPage = () => {

    const classes = useStyles();
    // const [{basket}, dispatch] = useStateValue();
    const [{basket}] = useStateValue();

    //Usamos el signo ? luego de baskket para poder evitar crash si el basket esta vacio 
    function FormRow(){
        return(
            <React.Fragment>
                
                {basket?.map((item) => (
                    <Grid item xs={12} md={4} sm={6} lg={3}>
                        <CheckoutCard key={item.id} product={item}/>
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
                        Carrito
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow></FormRow>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align="center" gutterBottom variant="h4">
                        <Total />
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
};

export default CheckoutPage;