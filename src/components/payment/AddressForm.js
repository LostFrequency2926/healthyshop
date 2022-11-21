import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';
import Button from '@mui/material/Button';

export default function AddressForm() {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const [{ comprador }, dispatch] = useStateValue();

  console.log(comprador)

  const infoComprador = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_INFO_COMPRADOR,
      item: {
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        zip,
        country,
      },
    })
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Direccion de envio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={firstName}
            onChange={e => setfirstName(e.target.value)}
            required
            id="firstName"
            name="firstName"
            label="Primer Nombre"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={lastName}
            onChange={e => setlastName(e.target.value)}
            id="lastName"
            name="lastName"
            label="Apellido"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={address1}
            onChange={e => setaddress1(e.target.value)}

            required
            id="address1"
            name="address1"
            label="Direccion"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={address2}
            onChange={e => setaddress2(e.target.value)}

            id="address2"
            name="address2"
            label="Direccion alternativa"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={city}
            onChange={e => setCity(e.target.value)}

            required
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={state}
            onChange={e => setState(e.target.value)}
            required

            id="state"
            name="state"
            label="Departamento"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={zip}
            onChange={e => setZip(e.target.value)}
            required
            id="zip"
            name="zip"
            label="Codigo Postal"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={country}
            onChange={e => setCountry(e.target.value)}
            required
            id="country"
            name="country"
            label="Pais"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick= {infoComprador}
            sx={{ mt: 3, ml: 1 }}
          >Guardar direccion
          </Button>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Usar esta direccion como direccion de facturacion"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

