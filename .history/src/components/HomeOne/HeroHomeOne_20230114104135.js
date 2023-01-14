/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import heroThumbOne from '../../assets/images/Home/home_no_bg.png';


function HeroHomeOne({ className }) {
    return (
        <>
            <section className={`appie-hero-area ${className || ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content">
                                <h2 className="appie-title">  GianTech Energy  </h2>
                                <p>  Customized Backup, Hybrid And Off-Grid Solutions   </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="  ">
                                <div className="thumb wow animated fadeInUp" data-wow-duration="2000ms" data-wow-delay="200ms">
                                    <img src={heroThumbOne} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;
