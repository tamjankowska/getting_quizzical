import React from 'react';
import './Footer.css';
import Logo from '../../images/quizzical_icon.png';

function Footer() {

    return (
    <>
        <div className="push"></div>
        <div className="Footer-container">
            <div className="footer-img">
                <img src={Logo} alt="Quizzical Logo" value="Play" />
            </div>
            <div className="boring-footer">
                <div className="footer-column1">
                    <h3>About</h3>
                    <ul>
                        <li><a href="/about">About Quizzical</a></li>
                        <li><a href="https://github.com/katiemhughes" target="_blank">Katie</a></li>
                        <li><a href="https://github.com/tamjankowska" target="_blank">Tam</a></li>
                        <li><a href="https://github.com/echarlotte612" target="_blank">Emily</a></li>
                        <li><a href="https://wearecodenation.com/" target="_blank">Code Nation</a></li>
                    </ul>
                </div>
                <div className="footer-column2">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="/faq">FAQ</a></li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-column3">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="/main">Home</a></li>
                        <li><a href="/leaderboard">Leaderboard</a></li>
                        <li><a href="/userhistory">User History</a></li>
                        <li><a href="/">User Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;