import React from "react";
import "./Navbar.css";
import Logo from "../../images/invquizzical_logo2.svg";
import Wink from '../../images/invquizzical_logowink.svg';
import { FaDoorClosed, FaDoorOpen } from "react-icons/fa";
import Profilepic from "../../images/profilepic.png";
import Logout from "../logout/Logout";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isHovered: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState((prevState) => ({ isHovered: !prevState.isHovered }));
  }

  render() {
    return (
      <div>
        {/* {sessionStorage.getItem("loggedIn") ? ( */}
          <div className="navbar-container">
              <div className="logo-container" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                {this.state.isHovered ? (
                  <img className="logo" src={Wink} alt="Quizzical Logo" />)
                  : (<img className="logo" src={Logo} alt="Quizzical Logo" />
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
              <div className="user-container">
                <h2>
                  <img src={Profilepic} className="profile-pic"></img>
                  <p className="username-text">
                    {sessionStorage.getItem("username")}{" "}
                  </p>
                </h2>
              </div>
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
        {/* // ) : (
        //   <div className="navbar-container">
        //     <div className="logo-container">
        //       <img className="logo" src={Logo} alt="Quizzical Logo" />
        //     </div>

        //     <ul className="navbar-text">
        //       <li className="navbar-item">
        //         <a href="/main">Home</a>
        //       </li>
        //       <li className="navbar-item">
        //         <a href="/about">About</a>
        //       </li>
        //     </ul>
        //   </div>
        // )} */}
      </div>
    );
  }
}

export default Navbar;
