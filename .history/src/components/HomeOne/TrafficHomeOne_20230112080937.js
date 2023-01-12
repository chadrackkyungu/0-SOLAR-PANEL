/* eslint-disable prettier/prettier */
import React from 'react';
// import thumb from '../../assets/images/traffic-thumb.png';

function TrafficHomeOne({ className }) {
    return (
        <section className={`appie-traffic-area pt-140 pb-180 ${className || ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service rounded  border-color mb-30">
                                    {/* <div className="icon">
                                        <i className="fal fa-check" />
                                    </div> */}
                                    <h5 className="title text-center">Contrary to popular belief</h5>
                                    <p>Contrary to popular belief Contrary to popular belief</p>
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
