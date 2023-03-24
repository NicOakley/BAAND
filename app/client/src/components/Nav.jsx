import {useState} from 'react';
import axios from 'axios';
import Login from './Login';
const Nav = () => {

    const [showLogin, setShowLogin] = useState(false);
    const handleClick = () => {
        console.log("clicked");
        setShowLogin(true);
    }

    const [showLogoutButton, setShowLogoutButton] = useState(false);

    const [showLoginButton, setShowLoginButton] = useState(true);

    // if the page is the dashboard, show the logout button
    

    return(
        <nav>
            <div className="logo-container">
                <div className="logo">BAAND<span>.</span></div>
            </div>
            <button className="nav-button" onClick={handleClick}><p>Log in</p></button>
            {showLogin && (<Login setShowLogin={setShowLogin}></Login>)}
        </nav>
    )
}

export default Nav