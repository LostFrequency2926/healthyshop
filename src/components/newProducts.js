import * as React from 'react';
//import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
//Formulario
import TextField from '@mui/material/TextField';
import { useState } from 'react';

//Consumir el state value general
import { useStateValue } from '../StateProvider';

//Poder hacer el dispatch de los elementos
// import { actionTypes } from '../reducer';
import Producto from '../classes/Producto';
import { Box, Grid } from '@material-ui/core';
import ProductAdmin from './Productadmin'
import ProductsData from '../dataProducts/ProductsData'

const useStyles = makeStyles(({ theme }) => ({
    centered: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '10 px',
        padding: '10 px'
    }
}))
 
export default function IngresarProductos() {

    const [idProduct, setIdProduct] = useState("");
    const [nameProduct, setNameProduct] = useState("");
    const [productType, setProductType] = useState("");
    const [priceProduct, setPriceProduct] = useState("");
    const [amountProduct, setAmountProduct] = useState("");
    const [imgProduct, setImgProduct] = useState("");
    const [descriptionProduct, setDescriptionProduct] = useState("");
    
    const classes = useStyles();
    //const [{ productstoEliminate }, dispatch] = useStateValue();
    const [{ productstoEliminate }] = useStateValue();

    console.log("producto a eliminar")
    console.log(productstoEliminate);

    const addProductoNuevotest = (e) => {
        const prodctoNuevo = new Producto(idProduct, nameProduct, productType, priceProduct, amountProduct, imgProduct, descriptionProduct);
        console.log(prodctoNuevo)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <div className='container'>
                   
                        <Grid container item xs="auto" spacing={2} alignItems="stretch" justifyContent="center" direction="row">
                            <Grid item xs={4}>
                                <form id='product-Form' component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off" alignContent='center' className={classes.centered}>
                                    <div>
                                        <Typography
                                            variant='h5'
                                            color='textSecondary'
                                            marginTop={"2rem"}
                                            marginBottom={"2rem"}>
                                            Formulario para ingreso de nuevos productos
                                        </Typography>
                                    </div>
                                    
                                    <div className='form-group' >
                                        <TextField value={idProduct}
                                            onChange={e => setIdProduct(e.target.value)}
                                            id="idProduct"
                                            label="Id Producto"
                                        />
                                    </div>

                                    <div className='form-group' >
                                        <TextField value={nameProduct}
                                            onChange={e => setNameProduct(e.target.value)}
                                            id="nameProduct"
                                            label="Nombre Producto"
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <TextField value={productType}
                                            onChange={e => setProductType(e.target.value)}
                                            id="productType"
                                            label="Categoria Producto"
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <TextField value={priceProduct}
                                            onChange={e => setPriceProduct(e.target.value)}
                                            id="priceProduct"
                                            label="Precio Producto"
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <TextField value={amountProduct}
                                            onChange={e => setAmountProduct(e.target.value)}
                                            id="amountProduct"
                                            label="Cantidad de Unidades"
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <TextField value={imgProduct}
                                            onChange={e => setImgProduct(e.target.value)}
                                            id="imgProduct"
                                            label="Direccion Imagen"
                                        />
                                    </div>
                                    <div className='form-group' id="descriptionProduct">
                                        <TextField value={descriptionProduct}
                                            onChange={e => setDescriptionProduct(e.target.value)}
                                            label="Descripción del producto"
                                        />
                                    </div>
                                    <div>
                                        <Button type='submit' variant="outlined" startIcon={<DeleteIcon />}>
                                            Cancelar
                                        </Button>

                                        <Button onClick={addProductoNuevotest} id="registrar-producto" type='submit' centered variant="contained" endIcon={<SendIcon />}>
                                            Registrar
                                        </Button>
                                    </div>
                                    <div>
                                    </div>
                                </form>
                            </Grid>

                            <Grid item xs={8}>
                                <Box   sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2} className={classes.centered}>
                                        {
                                            ProductsData.map(product => (
                                                <Grid item xs="auto">
                                                    <ProductAdmin key={product.id} product={product} />
                                                </Grid>
                                            ))
                                        }
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
               
                </div>
                </Box>
    );
}


