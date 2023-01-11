/* eslint-disable prettier/prettier */
import React from 'react';
import thumb from '../../assets/images/traffic-thumb.png';

function AboutSection({ className }) {
    return (
        <section className={`appie-traffic-area pt-140 pb-180 ${className || ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="appie-traffic-title">
                            <h3 className="title"> GianTech Solar panels </h3>
                            <p>
                                Our main focus is to provide services and products to both the public and private institutions at affordable and market related prices. As an innovative company, we thrive to offering effective and efficient world class services and products to all our customers as we operate on a first come first serve basis & hence we denounce favouritism. We aim at growing from strength to strength through establishing what the client’s needs are and work on satisfying those needs. As Delsat Solar, we pursue honesty, fairness and ethical standards to govern each and every business transaction.
                            </p>
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
