/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo/Giantech_logo.png';

function Drawer({ drawer, action, lang }) {
    const [itemSize, setSize] = useState('0px');
    const [item, setItem] = useState('home');
    const handler = (e, value) => {
        // e.preventDefault();
        const getItems = document.querySelectorAll(`#${value} li`).length;
        if (getItems > 0) {
            setSize(`${43 * getItems}px`);
            setItem(value);
        }
    };
    return (
        <>
            <div
                onClick={(e) => action(e)}
                className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
            ></div>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''
                                    }`}
                            >
                                <div className="canvas_close">
                                    <a href="#" onClick={(e) => action(e)}>
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                                <div className="offcanvas-brand text-center mb-40">
                                    <img src={logo} alt="" />
                                </div>
                                <div id="menu" className="text-left ">
                                    <ul className="offcanvas_main_menu">
                                        <li
                                            onClick={(e) => handler(e, 'home')}
                                            id="home"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="#">Home</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height:
                                                        item === 'home' ? itemSize : '0px',
                                                }}
                                            >
                                                <li>
                                                    <Link to="/">Home 1</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'service')}
                                            id="service"
                                            className="menu-item-has-children active"
                                        >
                                            <a href="/service">Service</a>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'pages')}
                                            id="pages"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="#">Pages</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height:
                                                        item === 'pages' ? itemSize : '0px',
                                                }}
                                            >
                                                <li>
                                                    <Link to="/about-us">About</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'news')}
                                            id="news"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="#">News</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height:
                                                        item === 'news' ? itemSize : '0px',
                                                }}
                                            >
                                                <li>
                                                    <Link to="/news">News Page</Link>
                                                </li>
                                                <li>
                                                    <Link to="/news/single-news">
                                                        Single News
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'contact')}
                                            id="contact"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-widget-info">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fal fa-envelope"></i>{' '}
                                                example@.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fal fa-phone"></i> +(27) 68 027 5001
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fal fa-map-marker-alt"></i>21 Doris street berea
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)

}

export default Drawer;
