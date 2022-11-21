import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/favicon.ico'
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//Consumir el state value general
import { useStateValue } from '../StateProvider';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#FF9900',
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
    }
}))


export default function NavBar() {

    const classes = useStyles();
    const [{ basket, user }] = useStateValue();
    const navigate = useNavigate();

    const desconectarse = () => {
        if (user) {
            navigate('/');
            signOut();
            
        }
    }
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar color="neutral" variant="contained" position="relative">
                    <Toolbar >
                        <Link to="/">
                            <IconButton>
                                <img height={"60rem"} src={logo} alt="icon" />
                            </IconButton>
                        </Link>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Healthy Shop
                        </Typography>
                        <Typography marginRight="3rem" color="inherit" variant="h6" component="p">
                            Hola {user ? user : "Invitado"}
                        </Typography>
                        <Link to='products' className={classes.grow}>
                            <Button color="inherit">Productos</Button>
                        </Link>
                        {user ? 
                            <Link to='movements' className={classes.grow}>
                                <Button color="inherit">Movimientos</Button>
                            </Link>
                            : ""}
                        {user ?
                            <Link to='ingress_products' className={classes.grow}>
                                <Button color="inherit">Ingresar Productos</Button>
                            </Link>
                            : ""}

                        {user ?
                            <Link onClick={desconectarse} className={classes.grow} >
                                <Button color="inherit">
                                    <strong> Desconectarse </strong>
                                </Button>
                            </Link>
                            :
                            <Link to='/singin' className={classes.grow} >
                                <Button color="inherit">
                                    <strong> Login </strong>
                                </Button>
                            </Link>
                        }

                        <Link to="checkout-page">
                            <IconButton aeria-label="ver carrito" className={classes.grow}>
                                <Badge badgeContent={basket?.length} color="secondary">
                                    <ShoppingCart fontSize='large' className={classes.grow} />
                                </Badge>
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}
