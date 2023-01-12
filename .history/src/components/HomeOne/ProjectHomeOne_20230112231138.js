/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
// import projectThumb from '../../assets/images/project-thumb.png';

function ProjectHomeOne({ className }) {
    return (
        <>
            <section className={`appie-project-area pb-100 mt-5 ${className || ''}`}>
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
                                            <h3 className="title"> We are worth to trust</h3>
                                            <p> Start the conversation by Clicking on the button bellow </p>
                                            <div className="input-box mt-30">
                                                <Link to="/about-us">   <button type="button"> Get in touch with us </button> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="appie-project-thumb">
                                    <img src={projectThumb} alt="" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectHomeOne;
