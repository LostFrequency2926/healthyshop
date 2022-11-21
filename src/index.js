import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Topbar } from "./components/topBar"
import { Home } from "./components/home"
import { App4 } from "./components/aboutUs"
import Footer from './components/footer';
import CheckoutPage from "./components/CheckoutPage"
// import Product from './components/Product';
import Navbar from './components/NavBar';
import Products from './components/Products';
import Movements from './components/Movements'
import NewProducts from './components/newProducts'
// import { Check } from '@material-ui/icons';

import './styles.css'
import './bootstrap.min.css'
import SignIn from './components/singin';
import Singup from './components/singup';
import Checkout from './components/payment/Checkout.js'

//Switch de React Router para habilitar navegacion por las paginas
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//StateProvider encargado de permitir la intercomunicacion entre componentes 
import { StateProvider } from './StateProvider';
import reducer, {initialState } from './reducer';
// import IngresarProductos from './components/IngresarProductos';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navbar />
        <Routes>
          <Route path='/checkout-page' element={<CheckoutPage />} />
          <Route path='/products' element={<div className='container-xxl'><Products /></div>} />
          <Route path='/movements' element={<Movements />} />
          <Route path='/ingress_products' element={<NewProducts />} />
          <Route path='/' element={[<Home />,<App4 />]} />
          <Route path='/singin' element={<SignIn />} />
          <Route path='/singup' element={<Singup />} />
          <Route path='/payment' element={<Checkout />} />
        </Routes>
      </StateProvider>
      <footer><Footer /></footer>
    </BrowserRouter>
  </React.StrictMode>
);




