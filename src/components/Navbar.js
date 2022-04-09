import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <b><a className="navbar-brand" href="#myPage">INFLUENZOS</a></b>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#about">ABOUT</a></li>
                        {/* <li><a href="#services">SERVICES</a></li> */}
                        {/* <li><a href="#portfolio">PORTFOLIO</a></li> */}
                        <li><a href="#pricing">CAMPAIGN</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li>
                            <button className="btn btn-default btn-md signin">
                                <p className="text-dark vertical-center">SIGN IN</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;