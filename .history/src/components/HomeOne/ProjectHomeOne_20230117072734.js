/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import projectThumb from '../../assets/images/Advert/ad_v1.png';

function ProjectHomeOne({ className }) {
    return (
        <>
            <section className={`appie-project-area pb-100 mt-5 pt-5 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="appie-project-box wow animated slideInUp"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="appie-project-content">
                                            <h3 className="title"> You can rely on us </h3>
                                            <p> You can reach to us using the phone number bellow </p>
                                            <div className="input-box mt-30">
                                                <Link to="/">   <button type="button"> Contact us  +(27) 79 100 5171 </button> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="appie-project-thumb">
                                    <img src={projectThumb} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeOne;
