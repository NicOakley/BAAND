import {useState} from 'react';
import axios from 'axios';

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
        if(password == confirmPassword)
        try {
            const response = await axios.post('http://localhost:8007/signup', {email, password})
            const success = response.status === 201;
            if(success){
                console.log("success");
                window.open('/onboarding', '_self');         
    } 
} catch (error) {
    console.log(error);
    
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