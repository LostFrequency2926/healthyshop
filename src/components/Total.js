import React from "react";
import accounting from "accounting";
import { makeStyles } from "@material-ui/core";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

//Obtenemos el valor del reduce de los price de basket
// import {getBasketTotal} from "../reducer";

//comunicacion con el state value general para agregar items al carrito
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "20vh",
        alignItems: "center"
    },
    buttom: {
        marginTop: "3rem",
        maxWidth: "200px"
    }
}))

const Total = () => {

    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();

    console.log.apply(dispatch)

    return(

        <div className={classes.root}>
            <h5>Total items: {basket?.length}</h5>
            <h5> {accounting.formatMoney((basket?.reduce((amount, item) => item.price + amount, 0)), "$")} </h5>
            <Link to='/payment'>
            <Button className={classes.buttom} variant="contained" color="primary"> Proceder con el Pago</Button>
            </Link>
        </div>

    )
}

export default Total