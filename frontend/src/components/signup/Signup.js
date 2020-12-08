import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className="signup-container">
            <h1 className="signup-title">Sign Up</h1>
            <form className="signup-form">
                <div className="username-signup-container">
                    <label htmlFor="username">Create a username:</label>
                    <input id="username-signup" type="text" name="username" placeholder="Username" />
                </div>
                <div className="email-signup-container">
                    <label htmlFor="email">Enter an email:</label>
                    <input id="email-signup" type="email" name="email" placeholder="Email" />
                </div>
                <div className="password-signup-container">
                    <label htmlFor="password">Create a password:</label>
                    <input id="password-signup" type="password" name="password" placeholder="Password" />
                </div>
                <div className="password-signup-container">
                    <label htmlFor="passwordCheck">Re-enter password:</label>
                    <input id="password-check" type="password" name="passwordCheck" placeholder="Re-enter password" />
                </div>
                    <input id="submit-login" type="submit" value="Submit" />
                    <Link to="/" className="login-page">Already have an account?</Link>
            </form>
        </div>
    )
}

export default Signup;
