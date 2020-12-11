import React from 'react';
import Logo from '../../images/invquizzical_logo2.svg';

function NavbarLO() {
    return (
            <div class="navbar-container">
                <div class="logo-container">
                    <img class="logo" src={Logo} alt="Quizzical Logo"/>
                </div>
                <ul class="navbar-text">
                    <li class="navbar-item"><a href="/">Home</a></li>
                    <li class="navbar-item"><a href="/about">About</a></li>
                </ul>
            </div>
    )
}

export default NavbarLO;
