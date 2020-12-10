import React from 'react';
import Landing from '../landing/Landing'
import '../mainpage/Mainpage.css';
import './Logout.css';

const Logout = () => {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('username');
    // add in useEffect to return, redirect to landing/login page after ~5 seconds

    return (
        <>
            <div className="logged-out-container">
                <h1 className="logged-out-title">You are now logged out. Sign in below to play again!</h1>
            </div>
            <div className="landing-component">
                <Landing />
            </div>
        </>
    )
}

export default Logout;