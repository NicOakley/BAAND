import {useState} from 'react';
import axios from 'axios';
const Login = ({setShowLogin}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email, password)

    const exitLogin = () => {
        setShowLogin(false);
    }

    const handleLogIn = async (e) => {
        e.preventDefault();
        try {
            console.log("Attempting to log in");
            const response = await axios.post('http://192.168.0.10:8007/login', {email, password})
            const success = response.status === 201;

            // on successful login - check registration status of user and redirect to appropriate page
            if(success){
                console.log("login success");

                // check registration status of user
                const checkRegistered = await axios.post('http://192.168.0.10:8007/regstatus', {email})
                // status codes
                const notRegistered = checkRegistered.status === 201;
                const registered = checkRegistered.status === 202;
                const onboarded = checkRegistered.status === 203;

                // if user is not registered
                if(notRegistered){
                    console.log("user not registered");
                }

                // if user is registered but not onboarded
                if(registered){
                    console.log("user registered but not onboarded");

                    // redirect to onboarding page with user id in url
                    window.open('/onboarding', '_self');


                }

                // if user is onboarded
                if(onboarded){
                    console.log("user onboarded");
                }


            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <div className="register-background">
            <div className="register-container">
                <div className="exit-button" onClick={exitLogin}>x</div>
                <h1>Welcome Back!</h1>
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
                    <button type="submit" onClick={handleLogIn}>Log in</button>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Login