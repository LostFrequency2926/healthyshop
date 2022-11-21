import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import Button from '@mui/material/Button';




export default function PaymentForm() {

  const [cardName, setcardName] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [expDate, setexpDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [{ tarjeta }, dispatch] = useStateValue();

  console.log(tarjeta)

  const infoTarjeta = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_INFO_TARJETA,
      item: {
        cardName,
        cardNumber,
        expDate,
        cvv,
      },
    })
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Metodo de pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            value={cardName}
            onChange={e => setcardName(e.target.value)}
            required
            id="cardName"
            label="Titular tarjeta"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={cardNumber}
            onChange={e => setcardNumber(e.target.value)}
            required
            id="cardNumber"
            label="Numero de tarjeta"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={expDate}
            onChange={e => setexpDate(e.target.value)}
            required
            id="expDate"
            label="Fecha de expiración"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={cvv}
            onChange={e => setCvv(e.target.value)}
            required
            id="cvv"
            label="CVV"
            helperText="Codigo de seguridad"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick= {infoTarjeta}
            sx={{ mt: 3, ml: 1 }}
          >Usar tarjeta
          </Button>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Recordar tarjeta para futuras compras"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}