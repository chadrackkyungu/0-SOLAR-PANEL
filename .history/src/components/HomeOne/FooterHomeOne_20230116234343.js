/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Giantech_logo.png';

function FooterHomeOne({ className }) {
    return (
        <>
            <section className={`appie-footer-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img src={logo} alt="" />
                                    </a>
                                </div>
                                <p>
                                    Solar panel technology is a solar panel system that utilizes renewable organic materials to produce energy. The technology was developed by Giantech Energy Solutions, a leading provider of software and hardware solutions for solar energy.
                                </p>

                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=100088701728948">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Navigation</h4>
                                <ul>
                                    <li>
                                        <Link to="/">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title">Get In Touch</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-envelope" /> example@.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-phone" /> +(27) 68 027 5001
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-map-marker-alt" /> 21 Doris Street Bearea
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                                <div className="copyright-text">
                                    <p>Copyright © 2023 GianTech All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeOne;
