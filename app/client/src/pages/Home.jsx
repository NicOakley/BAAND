import Nav from '../components/Nav'
import background from "../assets/home-bg.jpg"
import Register from '../components/Register'
import { useState } from 'react'

const Home = () => {

    const [showRegister, setShowRegister] = useState(false);

    const handleClick = () => {
        console.log("clicked")
        setShowRegister(true);
    }


    return(
<>      <div className="home-wrapper">
        <div className="home">
        <Nav></Nav>
            <div className="title-background">
                <h1 className="title">BAAND<span>.</span></h1>
                <h2 className="slogan">FIND YOUR BAAND</h2>
            </div>
            <button className="register-button" onClick={handleClick}>Create Account</button>
            <div className="content">
            </div>

            {showRegister && (<Register setShowRegister={setShowRegister}></Register>)}
        </div>
        </div>
</>
    )
}

export default Home