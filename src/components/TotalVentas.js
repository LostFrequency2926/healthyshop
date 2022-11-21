import React from "react";
import accounting from "accounting";
import { makeStyles } from "@material-ui/core";

import MovementsData from "../dataMovements/MovementsData";

//Obtenemos el valor del reduce de los price de basket
// import {getBasketTotal} from "../reducer";

//comunicacion con el state value general para agregar items al carrito
// import { useStateValue } from '../StateProvider';

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

const TotalVentas = () => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <h5>Total ventas: {MovementsData?.length}</h5>
            <h5> Valor Total Ventas <br/> {accounting.formatMoney((MovementsData?.reduce((amount, item) => (item.amountMovement*item.amount) + amount, 0)), "$")} </h5>            
        </div>
    )
}

export default TotalVentas