import React, { useEffect } from 'react';
import Landing from '../landing/Landing'
import '../mainpage/Mainpage.css';
import './Logout.css';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    let history = useHistory();

    sessionStorage.clear();

    useEffect(() => {
        setTimeout(() => {
            history.push("/")
        }, 10000);
    })
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