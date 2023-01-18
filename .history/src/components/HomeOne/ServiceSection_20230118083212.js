/* eslint-disable prettier/prettier */
import React from 'react';
import { FaSolarPanel } from "react-icons/fa";

function ServiceSection({ className }) {
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
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-single-service rounded  border-color mb-30 item-2">
                                    <div className="icon">
                                        {/* <i className="fal fa-check" /> */}
                                        <FaSolarPanel size={30} />
                                    </div>
                                    <h5 className="title my-3">Design</h5>
                                    <p className=''>We will design the best energy solution that fits the energy needs of your home, office, commercial or industry building</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-single-service rounded  border-color mb-30 item-2">
                                    <div className="icon">
                                        {/* <i className="fal fa-check" /> */}
                                        <FaSolarPanel size={30} />
                                    </div>
                                    <h5 className="title my-3">Supply</h5>
                                    <p className=''>We supply world class energy solutions at competitive pricing, coupled with great quality and exceptional service</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-single-service rounded  border-color mb-30 item-2">
                                    <div className="icon">
                                        {/* <i className="fal fa-check" /> */}
                                        <FaSolarPanel size={30} />
                                    </div>
                                    <h5 className="title my-3">Installation</h5>
                                    <p className=''>All our installations are done by qualified electricians with a Trade Test Certificate and a Wireman's license. After installation you will be supplied with a COC, rendering the installation legal and professional</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-single-service rounded  border-color mb-30 item-2">
                                    <div className="icon">
                                        {/* <i className="fal fa-check" /> */}
                                        <FaSolarPanel size={30} />
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

export default ServiceSection;
