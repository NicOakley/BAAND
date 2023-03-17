import {useState} from 'react';
import axios from 'axios';
const Profile = () => {



    return(
    <>
        {/* finsh profile form */}
        <div className="profile-container">
            <h2>Upload Photos</h2>
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

            <div>
                <h2>Bio</h2>
                <textarea className="bio" placeholder="About you"></textarea>
            </div>
        </div>

        
    </>
    )
}

export default Profile