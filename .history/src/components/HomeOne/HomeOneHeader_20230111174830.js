import React, { useEffect } from 'react';
import logo7 from '../../assets/images/logo-7.png';
import logo from '../../assets/images/logo.png';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation';

function HomeOneHeader({
    lang,
    darkEnable = false,
    action,
    langEnabled = false,
    changeMode,
    changeModeLan,
    dark,
    className,
}) {
    useEffect(() => {
        StickyMenu();
    });
    return (
        <header className={`appie-header-area appie-sticky ${className || ''}`}>
            <div className="container">
                <div className="header-nav-box">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                            <div className="appie-logo-box">
                                {darkEnable && dark ? (
                                    <a href="/">
                                        <img src={logo7} alt="" />
                                    </a>
                                ) : (
                                    <a href="/">
                                        <img src={logo} alt="" />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                            <div className="appie-header-main-menu">
                                <Navigation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HomeOneHeader;
