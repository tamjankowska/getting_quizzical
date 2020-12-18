import React from "react";
import "./Navbar.css";
import Logo from "../../images/invquizzical_logo2.svg";
import Wink from '../../images/invquizzical_logowink.svg';
import { FaDoorClosed, FaDoorOpen } from "react-icons/fa";
import Profilepic from "../../images/profilepic.png";
import Profilepic2 from "../../images/profilepic2.jpg";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
      isWinking: false,
      isNeil: false,
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.toggleWink = this.toggleWink.bind(this);
    this.toggleNeil = this.toggleNeil.bind(this);
  }

  toggleHover() {
    this.setState((prevState) => ({ isHovered: !prevState.isHovered }));
  }
  toggleWink() {
    this.setState((prevState) => ({ isWinking: !prevState.isWinking }));
  }
  toggleNeil() {
    this.setState((prevState) => ({ isNeil: !prevState.isNeil }));
  }

  

  render() {
    return (
      <div>
          <div className="navbar-container">
              <div className="logo-container" onMouseEnter={this.toggleWink} onMouseLeave={this.toggleWink}>
                {this.state.isWinking ? (
                  <a href="/main" ><img className="logo" src={Wink} alt="Quizzical Logo" /></a>)
                  : (<a href="/main" ><img className="logo" src={Logo} alt="Quizzical Logo" /></a>
                )}
              </div>
              <ul className="navbar-text">
                <li className="navbar-item">
                  <a href="/main">Home</a>
                </li>
                <li className="navbar-item">
                  <a href="/about">About</a>
                </li>
              </ul>
              <a href="/profile" className="user-container" onMouseEnter={this.toggleNeil} onMouseLeave={this.toggleNeil}> 
                  {this.state.isNeil ? (<img src={Profilepic2} className="profile-pic" alt="profile pic" />) : (<img src={Profilepic} className="profile-pic" alt="profile pic" />)}
                  <p className="username-text">
                    {sessionStorage.getItem("username")}{" "}
                  </p>
              </a>
              <div className="logout-container">
                <a className="logout-link" href="/logout">
                  <div
                    className="logout-button-container"
                    onMouseEnter={this.toggleHover}
                    onMouseLeave={this.toggleHover}
                  >
                    {this.state.isHovered ? (
                      <FaDoorOpen className="logout-icon" size={40} />
                    ) : (
                      <FaDoorClosed className="logout-icon" size={40} />
                    )}
                    <p className="logout-button-text">Logout</p>
                  </div>
                </a>
              </div>
          </div>
      </div>
    );
  }
}

export default Navbar;
