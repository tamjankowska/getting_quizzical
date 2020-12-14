import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import NavbarLO from '../navbar/NavbarLO';

function LoggedInStatus() {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const checkStatus = setInterval(() => {
            if (sessionStorage.getItem("loggedIn")) {
                setLoggedIn(true);
                return (() => clearInterval(checkStatus))
            } else {
                setLoggedIn(false);
                return (() => clearInterval(checkStatus))
            }
        }, 100)
    })

    return (
        <div>
            {(loggedIn) ? <Navbar /> : <NavbarLO />}
        </div>
    )
}

export default LoggedInStatus;

