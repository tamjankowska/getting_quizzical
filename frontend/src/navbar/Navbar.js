import React from 'react';
import './Navbar.css';
import Dumbbell from '../images/dumbbell.jpg';

function Navbar() {
    return (
        <div class="navbar-container">
            <div class="logo-container">
                <img class="logo" src={Dumbbell} alt="Dumbbell" />
            </div>
            <ul class="navbar-text">
                <li class="navbar-item">Home</li>
                <li class="navbar-item">About</li>
            </ul>
        </div>
    )
}

export default Navbar;