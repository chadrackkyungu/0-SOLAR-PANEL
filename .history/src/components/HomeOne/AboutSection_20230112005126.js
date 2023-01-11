/* eslint-disable prettier/prettier */
import React from 'react';
import thumb from '../../assets/images/About/846X677.PNG';

function AboutSection({ className }) {
    return (
        <section className={`appie-traffic-area pt-140 pb-180 ${className || ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="appie-traffic-title">
                            <h3 className="title my-5"> GianTech Solar panels </h3>
                            <p>
                                Delsat Solar offers customized backup, hybrid and off-grid solutions to meet your power demands. We utilize the latest technology to ensure maximum design life and cost savings.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Carefully designed</h5>
                                    <p>Mucker plastered bugger all mate morish are.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-2 mb-30">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Choose a App</h5>
                                    <p>Mucker plastered bugger all mate morish are.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-3">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">Seamless Sync</h5>
                                    <p>Mucker plastered bugger all mate morish are.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="appie-traffic-service item-4">
                                    <div className="icon">
                                        <i className="fal fa-check" />
                                    </div>
                                    <h5 className="title">User Interactive</h5>
                                    <p>Mucker plastered bugger all mate morish are.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="traffic-btn mt-50">
                                    <a className="main-btn" href="#">
                                        Learn More <i className="fal fa-arrow-right" />
                                    </a>
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
                    src={thumb}
                    alt=""
                />
            </div>
        </section>
    );
}

export default AboutSection;
