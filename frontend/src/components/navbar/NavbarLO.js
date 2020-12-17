import React from 'react';
import Logo from '../../images/invquizzical_logo2.svg';
import Wink from '../../images/invquizzical_logowink.svg';

class NavbarLO extends React.Component {
    constructor() {
        super();
        this.state = {
          isHovered: false,
          isWinking: false,
        };
        this.toggleHover = this.toggleHover.bind(this);
        this.toggleWink = this.toggleWink.bind(this);
      }
    
      toggleHover() {
        this.setState((prevState) => ({ isHovered: !prevState.isHovered }));
      }
      toggleWink() {
        this.setState((prevState) => ({ isWinking: !prevState.isWinking }));
      }

    render() {
        return (
            <div class="navbar-container">
              <div className="logo-container" onMouseEnter={this.toggleWink} onMouseLeave={this.toggleWink}>
                {this.state.isWinking ? (
                  <img className="logo" src={Wink} alt="Quizzical Logo" />)
                  : (<img className="logo" src={Logo} alt="Quizzical Logo" />
                )}
              </div>
                <ul class="navbar-text">
                    <li class="navbar-item"><a href="/">Login</a></li>
                    <li class="navbar-item"><a href="/about">About</a></li>
                </ul>
            </div>
        )
    }
}

export default NavbarLO;
