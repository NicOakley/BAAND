import {useState, useEffect} from 'react';
import axios from 'axios';

import { createBrowserHistory } from "history";
import qs from 'qs';

const HOST_IP_ADDRESS = "192.168.2.11";



const Register = ({setShowRegister}) => {

    


    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);

    console.log(email, password, confirmPassword);

    const exitRegister = () => {
        console.log("clicked2")
        setShowRegister(false);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        // if email doesnt contain @ or . then alert user
        // check if passwords match before sending to server
        if(password == confirmPassword){
            if(email && !email.includes("@") || !email.includes(".")) alert("Please enter a valid email address");
            else try {
            const response = await axios.post('http://'+ HOST_IP_ADDRESS +':8007/signup', {email, password})
            const success = response.status === 201;
            if(success){
                console.log("success");
                // get userid from server and store in local storage
                const checkID = await axios.post('http://'+ HOST_IP_ADDRESS +':8007/getuserid', {email});
                console.log(checkID);
                    console.log("userid retrieved");
                    localStorage.setItem('userID', checkID.data.id.userid);
                    window.open('/onboarding', '_self');
                     
    } 
} catch (error) {
    console.log(error);
}

}
else {
    alert("Passwords do not match");
}
    }

    return(
        <div className="register-background">
            <div className="register-container">
                <div className="exit-button" onClick={exitRegister}>x</div>
                <h1>Get Started</h1>
                <div className="form">
                    <div className="input-field">
                    <label>Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                    <label>Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                    <label>Confirm Password</label>
                    <input 
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required={true}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={handleClick}>Register</button>
                </div>
            </div>
        </div>
        
    )
}

export default Register