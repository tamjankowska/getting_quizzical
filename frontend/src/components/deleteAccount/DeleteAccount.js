import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './DeleteAccount.css';
import Swal from 'sweetalert2';

function DeleteAccount() {
    const history = useHistory();
    const emailAddress = sessionStorage.getItem("emailAddress");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const onChange = (event) => {
        if (event.target.id === "password") {
            setPassword(event.target.value);
        } else if (event.target.id === "passwordCheck") {
            setPasswordCheck(event.target.value);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const userID = sessionStorage.getItem("userID")
        const username = sessionStorage.getItem("username")
        axios.delete(`api/users/id/${userID}`, {data: {
            emailAddress,
            password,
            passwordCheck
        }}).then((res) => {
            console.log(res.data);
            if (res.data.status === "Account deleted") {
                Swal.fire({
                    title: 'Account deleted!',
                    imageUrl: 'https://i.gifer.com/685r.gif',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Olivia Newton John in Lets Get Physical video',
                    confirmButtonColor: '#C4F43C'
                });
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("loggedIn");
                sessionStorage.removeItem("userID");
                history.push("/");
            } else {
                Swal.fire({
                    title: `${username}, your account has now been deleted.`,
                    imageUrl: 'https://i.gifer.com/685r.gif',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Olivia Newton John in Lets Get Physical video',
                    confirmButtonColor: '#C4F43C'
                });
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("loggedIn");
                sessionStorage.removeItem("userID");
                setPassword("");
                setPasswordCheck("");
                history.push("/signup");
            }
        }).catch((err) => {
            Swal.fire({
                title: 'Account not deleted?!',
                imageUrl: 'https://media0.giphy.com/media/5EftpGR63iNgY/giphy.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Olivia Newton John looking surprised',
                confirmButtonColor: '#C4F43C'
            });
        })
    }

    return (
        <div>
                <form className="delete-account-form" onSubmit={onSubmit}>
                    <label htmlFor="emailAddress" name="emailAddress" id="emailAddress" value={emailAddress}>{emailAddress}</label>
                    <div className="pword-container">
                        <label className="delete-acc-label" htmlFor="password">Password: </label>
                        <input type="password" name="password" value={password} id="password" className="password-input" onChange={onChange}/>
                    </div>
                    <div className="verify-pword-container">
                        <label className="delete-acc-label" htmlFor="passwordCheck">Verify Password: </label>
                        <input type="password" name="passwordCheck" value={passwordCheck} className="verify-password-input" id="passwordCheck" onChange={onChange} />
                    </div>
                    <input className="delete-acc-btn" type="submit" value="Submit" name="submit" />
                </form>
        </div>
    )
}

export default DeleteAccount;
