import React from 'react';
import './About.css';
import IdleTimer from '../logoutpopup/LogoutPopup';

function About() {
    return (
        <>
            <IdleTimer />
            <h1 className="about-text">This will be the about page.</h1>
        </>
    )
}

export default About;
