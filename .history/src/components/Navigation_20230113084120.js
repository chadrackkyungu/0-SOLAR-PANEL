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
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/">Services</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
