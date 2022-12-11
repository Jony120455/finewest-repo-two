import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
        <nav className="nav abnav">
            <div className="container">
                <div className="main">
                    <div className="logo">
                        <img src="images/logo-nav.png" alt="logo"/>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/features'>Features</Link></li>
                            <li><Link to='/pricing'>Pricing</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                        <a className="contact-us" href="contact.html">Contact us</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    );
};

export default Navbar;