/* eslint-disable prettier/prettier */
import React from 'react';
// import thumb from '../../assets/images/traffic-thumb.png';

function TrafficHomeOne({ className }) {
    return (
        <section className={`appie-traffic-area pt-140 pb-180 ${className || ''}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title"> Our Services </h3>
                            <p> We provide the best service in South africa </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-single-service rounded  border-color mb-30">
                                    <div className="icon">
                                        {/* <i className="fal fa-check" /> */}
                                    </div>
                                    <h5 className="title my-3">Contrary to popular belief</h5>
                                    <p className=''>Contrary to popular belief Contrary to popular belief</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default TrafficHomeOne;
