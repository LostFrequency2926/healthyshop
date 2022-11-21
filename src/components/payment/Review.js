import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useStateValue } from '../../StateProvider';
import accounting from "accounting";

export default function Review() {

  const [{ basket, comprador, tarjeta}] = useStateValue();



  comprador?.map((persona) => (
    console.log(persona.firstName)
  ))

  tarjeta?.map((tar) => (
    console.log(tar.cardName)
  ))

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de la orden
      </Typography>
      <List disablePadding>
        {basket?.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.description} />
            <Typography variant="body2">{accounting.formatMoney(product.price, "$")}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {accounting.formatMoney((basket?.reduce((amount, item) => item.price + amount, 0)), "$")}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Envio
          </Typography>
          <Typography gutterBottom>{comprador?.map((persona) => (
            (persona.firstName)
          ))}</Typography>
          <Typography gutterBottom>{comprador?.map((persona) => ([persona.address1, persona.address2, persona.city, persona.state, persona.zip, persona.country].join(' ')))}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalles del pago
          </Typography>
          <Grid container>
            {tarjeta?.map((tar) => (
              <React.Fragment key={tar.cardName}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{tar.cardName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{tar.cardNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{tar.expDate}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}