import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../images/invquizzical_logo2.svg';
import Wink from '../../images/invquizzical_logowink.svg';

function Navbar() { 

    return (
        <div class="navbar-container">
            <div class="logo-container">
                <img class="logo" src={Logo} alt="Quizzical Logo" />
            </div>

            <ul class="navbar-text">
                <li class="navbar-item" onMouseEnter={console.log("ENTERED")} ><a href="/">Home</a></li>
                <li class="navbar-item"><a href="/about">About</a></li>
            </ul>
        </div>
    )
}

export default Navbar;