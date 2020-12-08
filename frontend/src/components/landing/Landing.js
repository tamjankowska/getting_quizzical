import React from 'react';
import '../landing/Landing.css';

function Landing() {
    return (
        <div className="landing-container">
            <h1 className="login-title">Log in</h1>
            <form className="login-form">
                <div className="email-container">
                    <label htmlFor="email">Enter your email address:</label>
                    <input id="email" type="email" name="email" placeholder="Username/email" />
                </div>
                <div className="password-container">
                    <label htmlFor="password">Enter your Password:</label>
                    <input id="password" type="password" name="password" placeholder="Password" />
                </div>
                <input id="submit-login" type="submit" value="Log In" />
                <a href="/signup" className="signup-link">Create an Account</a>
            </form>
        </div>
    )
}

export default Landing;
