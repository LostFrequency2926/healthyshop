import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';

// import Grid from '@mui/material/Unstable_Grid2';

//  import Button from '@mui/material/Button';
//  import IconButton from '@mui/material/IconButton';
//  import logo from '../assets/favicon.ico'
//  import { ShoppingCart } from '@material-ui/icons';
//  import { Badge } from '@material-ui/core';
//  import { Link } from 'react-router-dom'

// //Consumir el state value general
//  import { useStateValue } from '../StateProvider';
// import { Stack } from '@mui/material';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#000000',
            contrastText: '#fff',
        },
    },
});



const useStyles = makeStyles(({ theme }) => ({
    grow: {
        color: "#FFFFFF",
    },
    grow2: {
        color: "#FF9900",
    },
    espaciado: {
        width: "100%",
        display: "flex"
    }
}))


export default function Footer() {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>

            <AppBar color="neutral" variant="contained" position="relative">
                <Toolbar>
                    <div className="container-fluid border-bottom d-none d-lg-block">
                        <div className="row gy-4 gx-2">
                            <div className="col-lg-4 text-center py-2">
                                <div className="d-inline-flex align-items-center">
                                    <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                                    <div>
                                        {/*<img height={40} src="img/geo.png" style={{ objectFit: 'fill' }}></img>*/}
                                    </div>
                                    <Typography variant="caption">
                                        <h6 className={classes.grow2}>Nuestra Oficina</h6>
                                        <span>calle 123, Medellin, Colombia</span>
                                    </Typography>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center border-start border-end py-2">
                                <div className="d-inline-flex align-items-center">
                                    <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                                    <div>
                                        {/*<img height={40} src="img/email.png" style={{ objectFit: 'fill' }}></img>*/}
                                    </div>
                                    <Typography variant="caption">
                                        <h6 className={classes.grow2}>Email</h6>
                                        <span>define_teamCode@gmail.com</span>
                                    </Typography>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center py-2">
                                <div className="d-inline-flex align-items-center">
                                    <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                                    <div>
                                        {/*<img height={40} src="img/wpp.png" style={{ objectFit: 'fill' }}></img>*/}
                                    </div>
                                    <Typography variant="caption">
                                        <h6 className={classes.grow2}>Escribenos</h6>
                                        <span >+57 3333333333</span>
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </Toolbar>
                <Toolbar>
                    <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
                        Healthy shop SAS. Todos los derechos reservados.
                    </Typography>

                    <Typography aling='right' variant="caption" component="div" >
                        Diseñado por define Team_Code():
                    </Typography>
                </Toolbar>
            </AppBar >
        </ThemeProvider >
    );
}
