//Componente
import { Fragment } from "react";

export const Footer = () => {
    return (
    <Fragment>
    <div className="container-fluid bg-dark text-white-50 py-4">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 text-center text-md-start">
                    <p className="mb-md-0">&copy; <a className="text-white" href="index.js">Healthy shop SAS</a>. Todos los derechos reservados.</p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <p className="mb-0">Diseñado por <a className="text-white" href="https://lms.misiontic2022udea.com/login/index.php">define Team_Code():</a></p>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
    );
}