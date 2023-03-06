import {useState} from 'react';
import axios from 'axios';
const Profile = () => {



    return(
    <>
        {/* form */}
        <div className="profile-container">
            <div className="image-container">
            <input className="image" type="text" placeholder="+"/>
            <input className="image" type="text" placeholder="+"/>
            <input className="image" type="text" placeholder="+"/>
            </div>
            <div className="image-container">
            <input className="image" type="text" placeholder="+"/>
            <input className="image" type="text" placeholder="+"/>
            <input className="image" type="text" placeholder="+"/>
            </div>
        </div>

        
    </>
    )
}

export default Profile