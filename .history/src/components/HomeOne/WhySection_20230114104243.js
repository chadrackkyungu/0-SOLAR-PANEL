/* eslint-disable prettier/prettier */
import React from 'react';
import { CiSaveDown1 } from 'react-icons/ci';
import { GiSolarPower } from 'react-icons/gi';
import { IoMdPlanet } from 'react-icons/io';
import { MdLeakAdd } from 'react-icons/md';


function WhySection({ className }) {
    return (
        <section className={`appie-service-area pt-90 pb-100 ${className}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">GianTech Energy Solutions</h3>
                            <p> Why Giantech energy? </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <div className='text-white'> <CiSaveDown1 size={45} /> </div>
                                <span>1</span>
                            </div>
                            <h4 className="appie-title">Save on electricity Bills</h4>
                            <p> Solar PV is the perfect way of protecting yourself high electricity bills. Switch to Solar panels & save up on your bills</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <div className='text-white'> <GiSolarPower size={45} /> </div>
                                <span>2</span>
                            </div>
                            <h4 className="appie-title"> Ready when needed </h4>
                            <p> Generate your power and manage your use, even when the grid goes down! Survive during blackouts </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <div className='text-white'> <IoMdPlanet size={45} /> </div>
                                <span>3</span>
                            </div>
                            <h4 className="appie-title">Save the planet</h4>
                            <p> A renewable form of energy, sola offers a clean, green economic way of reducing your carbon footprint. Go Green & save the planet  </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <div className='text-white'> <MdLeakAdd size={45} /> </div>
                                <span>4</span>
                            </div>
                            <h4 className="appie-title">Increase Value</h4>
                            <p> The solar system is a great way of investing and increasing the value of your property. Upgrade your property value</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhySection;
