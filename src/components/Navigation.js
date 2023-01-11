/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>

            <ul>
                <li>
                    <Link to="/">  Home  </Link>
                </li>
                <li>
                    <Link to="/service">About Us</Link>
                </li>
                <li>
                    <Link to="/service">Services</Link>
                </li>
                {/* <li>
                    <a href="#">
                        Pages <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/about-us">About</Link>
                        </li>
                        <li>
                            <Link to="/about-us-another">About 2</Link>
                        </li>
                        <li>
                            <Link to="/error">Error</Link>
                        </li>
                        <li>
                            <Link to="/shops">Shops</Link>
                        </li>
                        <li>
                            <Link to="/shops/shop-details">Shop details</Link>
                        </li>
                    </ul>
                </li> */}
                {/* <li>
                    <a href="#">
                        News <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/news">News Page</Link>
                        </li>
                        <li>
                            <Link to="/news/single-news">Single News</Link>
                        </li>
                    </ul>
                </li> */}
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

        </>
    );
}

export default Navigation;
