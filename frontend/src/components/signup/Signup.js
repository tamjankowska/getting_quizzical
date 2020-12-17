import React, {useState} from 'react';
import './Signup.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    let history = useHistory();
    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const getResponse = (event) => {
        event.preventDefault();
        axios.post('api/users/signup', {
            username: username,
            emailAddress: email,
            password: password,
            passwordCheck: passwordCheck
        }).then((res) => {
            console.log(res.data.result);
            if (res.data.status === 'OK') {
                sessionStorage.setItem('loggedIn', true);
                sessionStorage.setItem('email', res.data.emailAddress);
                sessionStorage.setItem('username', res.data.username);
                sessionStorage.setItem('userID', res.data.userID);
                history.push('/main');
            } else {
                history.push('/signup');
            }
        })
    };

    const onChangeHandler = (event) => {
        if (event.target.id === "username") {
            setUser(event.target.value)
        } else if (event.target.id === "email") {
            setEmail(event.target.value)
        } else if (event.target.id === "password") {
            setPassword(event.target.value)
        } else if (event.target.id === "passwordCheck") {
            setPasswordCheck(event.target.value)
        }
    }



    return (
        <div className="signup-container">
            <h1 className="signup-title">Sign Up</h1>
            <form onSubmit={getResponse} className="signup-form">
                <div className="username-signup-container">
                    <label htmlFor="username">Create a username:</label>
                    <input className="username-signup" id="username" type="text" name="username" placeholder="Username" onChange={onChangeHandler} />
                </div>
                <div className="email-signup-container">
                    <label htmlFor="email">Enter an email:</label>
                    <input className="email-signup" id="email" type="email" name="email" placeholder="Email" onChange={onChangeHandler} />
                </div>
                <div className="password-signup-container">
                    <label htmlFor="password">Create a password:</label>
                    <input className="password-signup" id="password" type="password" name="password" placeholder="Password" onChange={onChangeHandler} />
                </div>
                <div className="password-signup-container">
                    <label htmlFor="passwordCheck">Re-enter password:</label>
                    <input className="password-check" id="passwordCheck" type="password" name="passwordCheck" placeholder="Re-enter password" onChange={onChangeHandler} />
                </div>
                    <input className="submit-login" id="submit" type="submit" value="Submit" />
                    <Link to="/" className="login-page">Already have an account?</Link>
            </form>
        </div>
    )
}

export default Signup;
