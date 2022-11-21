//Componente
import { Fragment } from "react";

export const Topbar = () => {
    return (
    <Fragment>
    <div className="container-fluid border-bottom d-none d-lg-block">
        <div className="row gy-4 gx-2">
           <div className="col-lg-4 text-center py-2">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                    <div>
                    {/*<img height={40} src="img/geo.png" style={{ objectFit: 'fill' }}></img>*/}
                    </div>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Nuestra Oficina</h6>
                        <span>calle 123, Medellin, Colombia</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center border-start border-end py-2">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                    <div>
                    {/*<img height={40} src="img/email.png" style={{ objectFit: 'fill' }}></img>*/}
                    </div>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Email</h6>
                        <span>define_teamCode@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center py-2">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                    <div>
                    {/*<img height={40} src="img/wpp.png" style={{ objectFit: 'fill' }}></img>*/}
                    </div>
                    <div className="text-start">
                        <h6 className="text-uppercase mb-1">Escribenos</h6>
                        <span>+57 3333333333</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
    );
}