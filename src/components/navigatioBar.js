//Componente
import { Fragment } from "react";


export const App2 = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">

                {/*<div className="caja">
                    <img height={200} alt="logo" src="img/logo.jpg" style={{ objectFit: 'fill' }}></img>
                </div>*/}

                <div>
                    <a href="index.html" className="navbar-brand ms-lg-5 center">
                       <h1 className="m-0 text-uppercase text-dark"><i className="bi bi-shop fs-1 text-primary me-3"></i>Healthy Shop</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="index.js" className="nav-item nav-link active">Inicio</a>
                        <a href = "productos.js" className="nav-item nav-link">Productos</a>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}
