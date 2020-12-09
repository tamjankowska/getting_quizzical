import React from 'react';
import './Footer.css';
import Logo from '../../images/quizzical_icon.png';

function Footer() {

    return (
        <div className="Footer-container">
            <div className="footer-img">
                <img src={Logo} alt="Quizzical Logo" value="Play" />
            </div>
            <div className="boring-footer">
                <div className="footer-column1">
                    <h3>About</h3>
                    <ul>
                        <li>About Quizzical</li>
                        <li>Katie</li>
                        <li>Tam</li>
                        <li>Emily</li>
                        <li>Code Nation</li>
                    </ul>
                </div>
                <div className="footer-column2">
                    <h3>Resources</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-column3">
                    <h3>Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>Leaderboard</li>
                        <li>User History</li>
                        <li>User Login</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;