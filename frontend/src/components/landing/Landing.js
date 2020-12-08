import React, {useState} from 'react';
import './Landing.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function Landing() {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (event) => {
        if (event.target.id === "email") {
            setEmail(event.target.value);
        } else if (event.target.id === "password") {
            setPassword(event.target.value);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/users/login', {email, password}).then((res) => {
            if (res.data.status == 'OK') {
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('email', res.data.emailAddress);
                sessionStorage.setItem('username', res.data.username);
                history.push('/');
            } else {
                history.push('/signup');
            }
        });
    }

    return (
        <div className="landing-container">
            <h1 className="login-title">Log In</h1>
            <form onSubmit={onSubmit} className="login-form">
                <div className="email-container">
                    <label htmlFor="email">Enter your email address:</label>
                    <input onChange = {onChange} value = {email} id="email" type="email" name="email" placeholder="Username/email" />
                </div>
                <div className="password-container">
                    <label htmlFor="password">Enter your Password:</label>
                    <input onChange = {onChange} value = {password} id="password" type="password" name="password" placeholder="Password" />
                </div>
                <input id="submit-login" type="submit" value="Log in" />
                <Link to="/signup" className="signup-link">Create an Account</Link>
            </form>
        </div>
    )
}

export default Landing;
