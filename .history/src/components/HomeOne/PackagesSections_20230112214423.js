/* eslint-disable prettier/prettier */
import React from 'react';

function PricingHomeOne({ className }) {
    return (
        <>
            <section className={`appie-pricing-area pt-90 pb-90 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title"> Our Packages </h3>
                                <p> We offer the best packages </p>
                            </div>
                        </div>
                    </div>
                    <div className="tabed-content">

                        <div id="month">
                            <div className="row justify-content-center">

                                <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                    <div className="pricing-one__single">
                                        <div className="pricig-heading">
                                            <h6> Mini House Kit </h6>
                                            {/* <div className="price-range">
                                                <sup>$</sup> <span>04</span>
                                                <p>/month</p>
                                            </div> */}
                                            <p> Get your 14 day free trial </p>
                                        </div>
                                        <div className="pricig-body">
                                            <ul>
                                                <li>  <i className="fal fa-check" /> Solar Energy Output: 2.5 KWh/Day Run 8 x 5 watt LEDs + TV + DSTV + Computer</li>
                                                <li> <i className="fal fa-check" /> 2400 WATT inverter with MPPT & AC battery charger </li>
                                                <li> <i className="fal fa-check" /> 2 x 100Ah deep cycle batteries + 2 x 250W panels Will run off grid and charge from AC Maximum peak power: 3 KVA
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-4 col-md-6 wow animated fadeInUp">
                                    <div className="pricing-one__single center">
                                        <div className="pricig-heading">
                                            <h6>Sweet</h6>
                                            {/* <div className="price-range">
                                                <sup>$</sup> <span>16</span>
                                                <p>/month</p>
                                            </div> */}
                                            <p>Billed $276 per website annually.</p>
                                        </div>
                                        <div className="pricig-body">
                                            <ul>
                                                <li>
                                                    <i className="fal fa-check" /> 60-day chat
                                                    history
                                                </li>
                                                <li>
                                                    <i className="fal fa-check" /> 50 GB cloud
                                                    storage
                                                </li>
                                                <li>
                                                    <i className="fal fa-check" /> 24/7 Support
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pricing-rebon">
                                            <span>Most Popular</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 wow animated fadeInLeft">
                                    <div className="pricing-one__single">
                                        <div className="pricig-heading">
                                            <h6>Fresh</h6>
                                            {/* <div className="price-range">
                                                <sup>$</sup> <span>04</span>
                                                <p>/month</p>
                                            </div> */}
                                            <p>Get your 14 day free trial</p>
                                        </div>
                                        <div className="pricig-body">
                                            <ul>
                                                <li>
                                                    <i className="fal fa-check" /> 60-day chat
                                                    history
                                                </li>
                                                <li>
                                                    <i className="fal fa-check" /> 15 GB cloud
                                                    storage
                                                </li>
                                                <li>
                                                    <i className="fal fa-check" /> 15 GB cloud
                                                    storage
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default PricingHomeOne;
