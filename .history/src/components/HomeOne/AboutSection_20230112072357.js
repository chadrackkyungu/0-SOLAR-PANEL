/* eslint-disable prettier/prettier */
import React from 'react';
import { GiBattery75, GiSolarPower } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import AboutImg from '../../assets/images/About/846X677.PNG';


function AboutSection({ className }) {
    return (
        <section className={`appie-traffic-area pt-140 pb-180 ${className || ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="appie-traffic-title">
                            <h2 className='title'>About</h2>
                            <h4 className="my-4"> GianTech Solar panels </h4>
                            <p>
                                GianTech Solar panel offers customized backup, hybrid and off-grid solutions to meet your power demands. We utilize the latest technology to ensure maximum design life and cost savings.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-1">
                                <div className="appie-traffic-service mb-30 text-success">
                                    <div className="icon">
                                        <GiSolarPower size={50} />
                                    </div>
                                    <h5 className="title mx-4"> 100 + Solar system installed </h5>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-1">
                                <div className="appie-traffic-service item-2 mb-30 text-success">
                                    <div className="icon">
                                        <GiBattery75 size={45} />
                                    </div>
                                    <h5 className="title mx-4"> 300 + KWH of Lithium Batteries Installed </h5>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div
                                    className="appie-features-content wow animated fadeInRight"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="600ms"
                                >
                                    <Link className="main-btn" to="/about-us">
                                        Learn More
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="traffic-thumb ">
                <img
                    className="wow animated fadeInRight"
                    data-wow-duration="2000ms"
                    data-wow-delay="200ms"
                    src={AboutImg}
                    alt=""
                />
            </div>
        </section>
    );
}

export default AboutSection;
