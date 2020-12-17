import React from 'react';
import DeleteAccount from '../deleteAccount/DeleteAccount';
import './ProfilePage.css';

function ProfilePage() {
    return (
        <div className="profile-container">
            <p className="profile-text">Delete your account</p>
            <DeleteAccount />
        </div>
    )
}

export default ProfilePage;
