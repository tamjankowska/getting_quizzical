import React from 'react';
import './Navbar.css';
import Logo from '../../images/invquizzical_logo2.svg';
// import Wink from '../../images/invquizzical_logowink.svg';
import { FaDoorClosed, FaDoorOpen } from 'react-icons/fa';
import Profilepic from '../../images/profilepic.png';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            isHovered: false,
            isLoggedIn: true
        };
        this.toggleHover = this.toggleHover.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    toggleHover() {
        this.setState(prevState => ({isHovered: !prevState.isHovered}));
    }

    logOut() {
        this.setState({
            isLoggedIn: false
        })
    }


    render() {
        return (
                <div class="navbar-container">
                    <div class="logo-container">
                        <img class="logo" src={Logo} alt="Quizzical Logo"/>
                </div>

                <ul class="navbar-text">
                    <li class="navbar-item"><a href="/">Home</a></li>
                    <li class="navbar-item"><a href="/about">About</a></li>
                </ul>
                <div className="user-container">
                    <h2><img src={Profilepic} className="profile-pic"></img>
                    <p className="username-text">{sessionStorage.getItem('username')} </p></h2>
                </div>
                <div className="logout-container">
                    { this.state.isLoggedIn ? (
                    <a className="logout-link" href="/logout">
                        <div className="logout-button-container" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.logOut}>
                            {this.state.isHovered ? <FaDoorOpen className="logout-icon" size={40}/> : <FaDoorClosed className="logout-icon" size={40} /> }
                            <p className="logout-button-text">Logout</p>
                        </div>
                    </a>
                    ) : null }
                </div>
            </div>
        )
    }
}

export default Navbar;