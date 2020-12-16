import React, { useEffect, useState } from 'react';
import '../mainpage/Mainpage.css';
import './Logout.css';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    let history = useHistory();
    const [countdown, setCountdown] = useState(5)

    useEffect(() => {
        sessionStorage.clear();
        setTimeout(() => {
            history.push("/")
        }, 5000);
    })
    
    useEffect(() => {
        const redirect = setInterval(() => {
            if (countdown <= 5 && countdown > 0) {
                setCountdown(countdown - 1)
            }
        }, 1000);
        return () => clearInterval(redirect);
    })

    return ( 
        <div className="logged-out-container">
            <h1 className="logged-out-title">You are logged out.</h1>
            <h2 className="redirect-countdown">Redirecting to login... {countdown}</h2>
        </div> 
    )
}

export default Logout;