//Componente
import { Fragment } from "react";

export const App4 = () => {
    return (
    <Fragment>
    <div className="container-fluid py-5">
    <div className="container">
        <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" >
                <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" style={{objectFit: 'cover'}} alt="about"></img>
                </div>
            </div>
            <div className="col-lg-7">
                <div className="border-start border-5 border-primary ps-5 mb-5">
                    <h6 className="text-primary text-uppercase">Tienda de implementos deportivos</h6>
                    <h1 className="display-5 text-uppercase mb-0">Stay strong and Healthy</h1>
                </div>
                <h4 className="text-body mb-4">Encuentra todos los implementos deportivos que necesites para ti y tu familia</h4>
                <div className="bg-light p-4">
                    <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item w-50" role="presentation">
                            <button className="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1"
                                aria-selected="true">Tip del dia</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                            <p className="mb-0">Realizar cualquier tipo de actividad deportiva, por lo menos dos veces por semana ayuda a que tengamos una vida más saludable y balanceada, además sirve para distraernos de la vida cotidiana.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </Fragment>
    );
}