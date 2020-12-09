import React from 'react';
import './Navbar.css';
import Logo from '../../images/invquizzical_logo2.svg';
import Wink from '../../images/invquizzical_logowink.svg';

function Navbar() { 

    return (
        <div className="navbar-container">
            <div className="logo-container">
                <img className="logo" src={Logo} alt="Quizzical Logo" />
            </div>

            <ul className="navbar-text">
                <li className="navbar-item"><a href="/">Home</a></li>
                <li className="navbar-item"><a href="/about">About</a></li>
            </ul>
        </div>
    )
}

export default Navbar;