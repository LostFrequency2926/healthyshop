import * as React from 'react';


//Componente
import { Fragment } from "react";

export const Home = () => {

    return (

        <Fragment>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">

                <div className="container py-5">

                    <div className="row justify-content-start">

                        <div className="col-lg-8 text-center text-lg-start">

                            <h1 className="display-4 text-uppercase text-white mb-lg-4">Healthy Shop</h1>
                            <p className="fs-4 text-white mb-lg-4">La vida comienza al final de tu zona de confort. Walsh N. D.</p>
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">

                                <a href="https://www.youtube.com/watch?v=93gZIDZBdtg&ab_channel=LofiZone" className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5">Da el primer paso</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>



        </Fragment>
    );
}
