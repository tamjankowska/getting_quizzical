import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";
import './LogoutPopup.css';

Modal.setAppElement("#root");

function LogoutPopup() {

    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const idleTimerRef = useRef(null);
    const sessionTimeoutRef = useRef(null);

    const onIdle = () => {
        console.log("User is idle");
        setModalIsOpen(true);
        sessionTimeoutRef.current = setTimeout(logOut, 500000);
    };

    const stayActive = () => {
        setModalIsOpen(false);
        clearTimeout(sessionTimeoutRef.current);
        console.log("User is active");
    };

    const logOut = () => {
        setModalIsOpen(false);
        setIsLoggedIn(false);
        clearTimeout(sessionTimeoutRef.current);
        console.log("User has logged out");
        history.push('/');
    };


    return (
        <div>
            <Modal 
                className="Modal" 
                overlayClassName="Overlay" 
                isOpen={modalIsOpen}
                // closeTimeoutMS={500}
                >
                    <h2>You've haven't been getting very Quizzical...</h2>
                    <p>So, your session has timed out. Click below to log back in.</p>
                    <button className="modal-button" type="button" onClick={logOut}>Take me back to login</button>
            </Modal>
            <IdleTimer 
                ref={idleTimerRef}
                timeout={1 * 500000}
                onIdle={onIdle}
            />
        </div>
    )
}

export default LogoutPopup;
