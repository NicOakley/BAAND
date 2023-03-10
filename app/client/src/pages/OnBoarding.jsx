import Nav from '../components/Nav'
import Profile from '../components/Profile'
import {useState, useEffect} from 'react';
import axios from 'axios';

var currentQuestion = 0;
const numQuestions = 5;
const HOST_IP_ADDRESS = "192.168.2.11";
const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const OnBoarding = () => {
    // Print userid from local storage
    console.log(localStorage.getItem("userID"));
    const currentUser = localStorage.getItem("userID");

    const continueToNextStage = () => {
        setText(questions[currentQuestion]); // set the text to the next question
        slideAnimation(); // aniamte 
        currentQuestion++;
    }

    // Animation used for sliding the title and input fields
    const slideAnimation = async event => {
        setInputClass("onboarding-input slider");
        await sleep(950);
        setTitleClass("onboarding-title");
        setInputClass("onboarding-input");
    }

    // Onboarding questions
    var initialText = "What's your name?";
    var questions = [
        "How old are you?", 
        "You play...",
        "Seeking...",
        "Create your profile"
    ];

    // Show text input
    const showTextInput = () => { setTextInputClass("onboarding-input-text"); }

    // Show instrument selection
    const showInstrumentSelection = () => { setTitleClass("instrument-selection"); }

    // Show Plays for selection
    const showPlaysForSelection = () => { setTitleClass("instrument-selection"); }

    // Hide text input
    const hideTextInput = () => { setTextInputClass("invisible"); }

    // Hide instrument selection
    const hideInstrumentSelection = () => { setTitleClass("invisible"); }

    // Hide Plays for selection
    const hidePlaysForSelection = () => { setTitleClass("invisible"); }

    // Declare state variables
    const [currentInput, setCurrentInput] = useState("");
    const [firstName, setFirstName] = useState("");
    const [age, setAge] = useState(null);
    const [titleClass, setTitleClass] = useState("onboarding-title");
    const [inputClass, setInputClass] = useState("onboarding-input");
    const [textInputClass, setTextInputClass] = useState("onboarding-input-text");
    const [instrumentSelectionClass, setInstrumentSelectionClass] = useState("invisible");
    const [seekingSelectionClass, setSeekingSelectionClass] = useState("invisible");
    const [text, setText] = useState(initialText);
    const [instrumentArray, setInstrumentArray] = useState([]);
    const [seekingInstrumentArray, setSeekingArray] = useState([]);
    const [showProfile, setShowProfile] = useState(false);


    console.log(currentInput, firstName, age, instrumentArray, seekingInstrumentArray);

    // enter key -> handle click
    useEffect(() => {
        const handleKeyDown = (e) => {
            if(e.key === "Enter") handleClick(e);
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentInput]);
    
    // handle click event
    const handleClick = async event => {
        console.log(currentQuestion);
        event.preventDefault();
        if(currentQuestion >= numQuestions-1){
            console.log("done");
            setTitleClass("onboarding-title invisible");
            setInputClass("onboarding-input invisible");

            // Send data to mongodb
            // Const response = await axios.delete('http://192.168.2.11:8007/reset');

            // Check no fields are empty
            if(firstName == "" || age == "" || instrumentArray.length == 0 || seekingInstrumentArray.length == 0){
                alert("Error - Please fill out all fields");
                window.open("/onboarding", "_self");
            }
            else{
            const response = await axios.post('http://'+ HOST_IP_ADDRESS +':8007/onboard', 
            {userid: currentUser,name: firstName,age: age,instruments: instrumentArray,seeking:seekingInstrumentArray});
            window.open("/dashboard", "_self");
            }


        }

        if(currentQuestion == 0) {
            setFirstName(currentInput);
            setCurrentInput("");
            continueToNextStage();
        }

        else if(currentQuestion == 1) {
            setAge(currentInput);
            setCurrentInput("");
            continueToNextStage();
            await sleep(270);
            hideTextInput();
            setInstrumentSelectionClass("instrument-selection")
        }
        else if(currentQuestion == 2) {
            continueToNextStage();
            setInstrumentSelectionClass("invisible");
            setSeekingSelectionClass("instrument-selection");
        }
        else if(currentQuestion == 3) {
            setSeekingSelectionClass("invisible");
            continueToNextStage();
        }
    }

    const handlePlaysClick = async event => {
        // GUITAR - if guitar is clicked
        if(event.target.id == "guitar-plays") {
            //check if instrument is in instrumentArray
            if(instrumentArray.includes("guitar")){
                // remove guitar from instrumentArray
                instrumentArray.splice(instrumentArray.indexOf("guitar"), 1);
                // remove selected class from guitar button
                event.target.classList.remove("selected");
                console.log("instrumentArray: " +instrumentArray);
                return;
            }
            // add selected class to guitar button
            event.target.classList.add("selected");
            // add guitar to instrumentArray
            if(!instrumentArray.includes("guitar"))
                instrumentArray.push("guitar");
                console.log("instrumentArray: " +instrumentArray);
        }

        // BASS - if bass is clicked
        if(event.target.id == "bass-plays") {
            //check if instrument is in instrumentArray
            if(instrumentArray.includes("bass")){
                // remove bass from instrumentArray
                instrumentArray.splice(instrumentArray.indexOf("bass"), 1);
                // remove selected class from bass button
                event.target.classList.remove("selected");
                console.log(instrumentArray);
                return;
            }
            // add selected class to bass button
            event.target.classList.add("selected");
            // add bass to instrumentArray
            if(!instrumentArray.includes("bass"))
                instrumentArray.push("bass");
            console.log(instrumentArray);
        }

        // DRUMS - if drums is clicked
        if(event.target.id == "drums-plays") {
            //check if instrument is in instrumentArray
            if(instrumentArray.includes("drums")){
                // remove drums from instrumentArray
                instrumentArray.splice(instrumentArray.indexOf("drums"), 1);
                // remove selected class from drums button
                event.target.classList.remove("selected");
                console.log(instrumentArray);
                return;
            }
            // add selected class to drums button
            event.target.classList.add("selected");
            // add drums to instrumentArray
            if(!instrumentArray.includes("drums"))
                instrumentArray.push("drums");
            console.log(instrumentArray);
        }

        // VOCALS - if vocals is clicked
        if(event.target.id == "vocals-plays") {
            //check if instrument is in instrumentArray
            if(instrumentArray.includes("vocals")){
                // remove vocals from instrumentArray
                instrumentArray.splice(instrumentArray.indexOf("vocals"), 1);
                // remove selected class from vocals button
                event.target.classList.remove("selected");
                console.log(instrumentArray);
                return;
            }
            // add selected class to vocals button
            event.target.classList.add("selected");
            // add vocals to instrumentArray
            if(!instrumentArray.includes("vocals"))
                instrumentArray.push("vocals");
            console.log(instrumentArray);
        }

        // KEYBOARD - if keyboard is clicked
        if(event.target.id == "keyboard-plays") {
            //check if instrument is in instrumentArray
            if(instrumentArray.includes("keyboard")){
                // remove keyboard from instrumentArray
                instrumentArray.splice(instrumentArray.indexOf("keyboard"), 1);
                // remove selected class from keyboard button
                event.target.classList.remove("selected");
                console.log(instrumentArray);
                return;
            }
            // add selected class to keyboard button
            event.target.classList.add("selected");
            // add keyboard to instrumentArray
            if(!instrumentArray.includes("keyboard"))
                instrumentArray.push("keyboard");
            console.log(instrumentArray);
    }

        //UKELELE - if ukelele is clicked
        if(event.target.id == "ukelele-plays") {
            //check if instrument is in instrumentArray
            if(instrumentArray.includes("ukelele")){
                // remove ukelele from instrumentArray
                instrumentArray.splice(instrumentArray.indexOf("ukelele"), 1);
                // remove selected class from ukelele button
                event.target.classList.remove("selected");
                console.log(instrumentArray);
                return;
            }
            // add selected class to ukelele button
            event.target.classList.add("selected");
            // add ukelele to instrumentArray
            if(!instrumentArray.includes("ukelele"))
                instrumentArray.push("ukelele");
            console.log(instrumentArray);
        }

            // FLUTE - if flute is clicked
            if(event.target.id == "flute-plays") {
                //check if instrument is in instrumentArray
                if(instrumentArray.includes("flute")){
                    // remove flute from instrumentArray
                    instrumentArray.splice(instrumentArray.indexOf("flute"), 1);
                    // remove selected class from flute button
                    event.target.classList.remove("selected");
                    console.log(instrumentArray);
                    return;
                }
                // add selected class to flute button
                event.target.classList.add("selected");
                // add flute to instrumentArray
                if(!instrumentArray.includes("flute"))
                    instrumentArray.push("flute");
                console.log(instrumentArray);
            }

            // BANJO - if banjo is clicked
            if(event.target.id == "banjo-plays") {
                //check if instrument is in instrumentArray
                if(instrumentArray.includes("banjo")){
                    // remove banjo from instrumentArray
                    instrumentArray.splice(instrumentArray.indexOf("banjo"), 1);
                    // remove selected class from banjo button
                    event.target.classList.remove("selected");
                    console.log(instrumentArray);
                    return;
                }
                // add selected class to banjo button
                event.target.classList.add("selected");
                // add banjo to instrumentArray
                if(!instrumentArray.includes("banjo"))
                    instrumentArray.push("banjo");
                console.log(instrumentArray);
            }

            // BAGPIPES - if bagpipes is clicked
            if(event.target.id == "bagpipes-plays") {
                //check if instrument is in instrumentArray
                if(instrumentArray.includes("bagpipes")){
                    // remove bagpipes from instrumentArray
                    instrumentArray.splice(instrumentArray.indexOf("bagpipes"), 1);
                    // remove selected class from bagpipes button
                    event.target.classList.remove("selected");
                    console.log(instrumentArray);
                    return;
                }
                // add selected class to bagpipes button
                event.target.classList.add("selected");
                // add bagpipes to instrumentArray
                if(!instrumentArray.includes("bagpipes"))
                    instrumentArray.push("bagpipes");
                console.log(instrumentArray);
            }
    }

    const handleSeekingClick = (event) => {
        // GUITAR - if guitar is clicked
        if(event.target.id == "guitar-seek") {
            //check if instrument is in instrumentArray
            if(seekingInstrumentArray.includes("guitar")){
                // remove guitar from instrumentArray
                seekingInstrumentArray.splice(seekingInstrumentArray.indexOf("guitar"), 1);
                // remove selected class from guitar button
                event.target.classList.remove("selected");
                console.log("instrumentSeekingArray: " +seekingInstrumentArray);
                return;
            }
            // add selected class to guitar button
            event.target.classList.add("selected");
            // add guitar to instrumentArray
            if(!seekingInstrumentArray.includes("guitar"))
                seekingInstrumentArray.push("guitar");
            console.log("instrumentSeekingArray: " +seekingInstrumentArray);
        }

        // BASS - if bass is clicked
        if(event.target.id == "bass-seek") {
            //check if instrument is in instrumentArray
            if(seekingInstrumentArray.includes("bass")){
                // remove bass from instrumentArray
                seekingInstrumentArray.splice(seekingInstrumentArray.indexOf("bass"), 1);
                // remove selected class from bass button
                event.target.classList.remove("selected");
                console.log("instrumentArray: " +seekingInstrumentArray);
                return;
            }
            // add selected class to bass button
            event.target.classList.add("selected");
            // add bass to instrumentArray
            if(!seekingInstrumentArray.includes("bass"))
            seekingInstrumentArray.push("bass");
            console.log("instrumentArray: " +seekingInstrumentArray);
        }

        // DRUMS - if drums is clicked
        if(event.target.id == "drums-seek") {
            //check if instrument is in instrumentArray
            if(seekingInstrumentArray.includes("drums")){
                // remove drums from instrumentArray
                seekingInstrumentArray.splice(seekingInstrumentArray.indexOf("drums"), 1);
                // remove selected class from drums button
                event.target.classList.remove("selected");
                console.log(seekingInstrumentArray);
                return;
            }
            // add selected class to drums button
            event.target.classList.add("selected");
            // add drums to instrumentArray
            if(!seekingInstrumentArray.includes("drums"))
            seekingInstrumentArray.push("drums");
            console.log(seekingInstrumentArray);
        }

        // VOCALS - if vocals is clicked
        if(event.target.id == "vocals-seek") {
            //check if instrument is in instrumentArray
            if(seekingInstrumentArray.includes("vocals")){
                // remove vocals from instrumentArray
                seekingInstrumentArray.splice(seekingInstrumentArray.indexOf("vocals"), 1);
                // remove selected class from vocals button
                event.target.classList.remove("selected");
                console.log(seekingInstrumentArray);
                return;
            }
            // add selected class to vocals button
            event.target.classList.add("selected");
            // add vocals to instrumentArray
            if(!seekingInstrumentArray.includes("vocals"))
            seekingInstrumentArray.push("vocals");
            console.log(seekingInstrumentArray);
        }

        // KEYBOARD - if keyboard is clicked
        if(event.target.id == "keyboard-seek") {
            //check if instrument is in instrumentArray
            if(seekingInstrumentArray.includes("keyboard")){
                // remove keyboard from instrumentArray
                seekingInstrumentArray.splice(seekingInstrumentArray.indexOf("keyboard"), 1);
                // remove selected class from keyboard button
                event.target.classList.remove("selected");
                console.log(seekingInstrumentArray);
                return;
            }
            // add selected class to keyboard button
            event.target.classList.add("selected");
            // add keyboard to instrumentArray
            if(!seekingInstrumentArray.includes("keyboard"))
                seekingInstrumentArray.push("keyboard");
            console.log(seekingInstrumentArray);
    }

        //UKELELE - if ukelele is clicked
        if(event.target.id == "ukelele-seek") {
            //check if instrument is in instrumentArray
            if(seekingInstrumentArray.includes("ukelele")){
                // remove ukelele from instrumentArray
                seekingInstrumentArray.splice(seekingInstrumentArray.indexOf("ukelele"), 1);
                // remove selected class from ukelele button
                event.target.classList.remove("selected");
                console.log(seekingInstrumentArray);
                return;
            }
            // add selected class to ukelele button
            event.target.classList.add("selected");
            // add ukelele to instrumentArray
            if(!seekingInstrumentArray.includes("ukelele"))
                seekingInstrumentArray.push("ukelele");
            console.log(seekingInstrumentArray);
        }

            // FLUTE - if flute is clicked
            if(event.target.id == "flute-seek") {
                //check if instrument is in instrumentArray
                if(seekingInstrumentArray.includes("flute")){
                    // remove flute from instrumentArray
                    seekingInstrumentArray.splice(seekingInstrumentArray.indexOf("flute"), 1);
                    // remove selected class from flute button
                    event.target.classList.remove("selected");
                    console.log(seekingInstrumentArray);
                    return;
                }
                // add selected class to flute button
                event.target.classList.add("selected");
                // add flute to instrumentArray
                if(!seekingInstrumentArray.includes("flute"))
                seekingInstrumentArray.push("flute");
                console.log(seekingInstrumentArray);
            }

            // BANJO - if banjo is clicked
            if(event.target.id == "banjo-seek") {
                //check if instrument is in instrumentArray
                if(seekingInstrumentArray.includes("banjo")){
                    // remove banjo from instrumentArray
                    seekingInstrumentArray.splice(seekingInstrumentArray.indexOf("banjo"), 1);
                    // remove selected class from banjo button
                    event.target.classList.remove("selected");
                    console.log(seekingInstrumentArray);
                    return;
                }
                // add selected class to banjo button
                event.target.classList.add("selected");
                // add banjo to instrumentArray
                if(!seekingInstrumentArray.includes("banjo"))
                    seekingInstrumentArray.push("banjo");
                console.log(seekingInstrumentArray);
            }

            // BAGPIPES - if bagpipes is clicked
            if(event.target.id == "bagpipes-seek") {
                //check if instrument is in instrumentArray
                if(seekingInstrumentArray.includes("bagpipes")){
                    // remove bagpipes from instrumentArray
                    seekingInstrumentArray.splice(seekingInstrumentArray.indexOf("bagpipes"), 1);
                    // remove selected class from bagpipes button
                    event.target.classList.remove("selected");
                    console.log(seekingInstrumentArray);
                    return;
                }
                // add selected class to bagpipes button
                event.target.classList.add("selected");
                // add bagpipes to instrumentArray
                if(!seekingInstrumentArray.includes("bagpipes"))
                    seekingInstrumentArray.push("bagpipes");
                console.log(seekingInstrumentArray);
            }
    }


    return(
<>
    <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
      </meta>
        <div className="onboarding-wrapper">
            <div className="onboarding">
                <div className={titleClass}>
                    <h1>{text}</h1>
                </div>
                <div className={inputClass}>
                    <input 
                    className={textInputClass} 
                    type="text" 
                    placeholder=""
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}/>

                    {/* You are a... */}
                    <div className={instrumentSelectionClass}>
                        <button id="guitar-plays" className="instrument-selection-item" onClick={handlePlaysClick}>GUITAR</button>
                        <button id="bass-plays" className="instrument-selection-item" onClick={handlePlaysClick}>BASS</button>
                        <button id="drums-plays" className="instrument-selection-item" onClick={handlePlaysClick}>DRUMS</button>
                        <button id="vocals-plays" className="instrument-selection-item" onClick={handlePlaysClick}>VOCALS</button>
                        <button id="keyboard-plays" className="instrument-selection-item" onClick={handlePlaysClick}>KEYBOARD</button>
                        <button id="ukelele-plays" className="instrument-selection-item" onClick={handlePlaysClick}>UKELELE</button>
                        <button id="flute-plays" className="instrument-selection-item" onClick={handlePlaysClick}>FLUTE</button>
                        <button id="banjo-plays" className="instrument-selection-item" onClick={handlePlaysClick}>BANJO</button>
                        <button id="bagpipes-plays" className="instrument-selection-item" onClick={handlePlaysClick}>BAGPIPES</button>
                    </div>
                    {/* Plays for someone who plays...*/}
                    <div className={seekingSelectionClass}>
                        <button id="guitar-seek" className="instrument-selection-item" onClick={handleSeekingClick}>GUITAR</button>
                        <button id="bass-seek" className="instrument-selection-item" onClick={handleSeekingClick}>BASS</button>
                        <button id="drums-seek" className="instrument-selection-item" onClick={handleSeekingClick}>DRUMS</button>
                        <button id="vocals-seek" className="instrument-selection-item" onClick={handleSeekingClick}>VOCALS</button>
                        <button id="keyboard-seek" className="instrument-selection-item" onClick={handleSeekingClick}>KEYBOARD</button>
                        <button id="ukelele-seek" className="instrument-selection-item" onClick={handleSeekingClick}>UKELELE</button>
                        <button id="flute-seek" className="instrument-selection-item" onClick={handleSeekingClick}>FLUTE</button>
                        <button id="banjo-seek" className="instrument-selection-item" onClick={handleSeekingClick}>BANJO</button>
                        <button id="bagpipes-seek" className="instrument-selection-item" onClick={handleSeekingClick}>BAGPIPES</button>
                    </div>
                </div>

                {/* Profile react component */}
                <div className="profile-container">
                {showProfile && (<Profile setShowProfile={setShowProfile}></Profile>)}
                </div>
                

                <div className="onboarding-next">
                    <button onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="38" fill="" viewBox="0 0 41 38">
                            <path fill="#0a0a0a" d="M39.78 20.768a2.5 2.5 0 0 0 0-3.536L23.872 1.322a2.5 2.5 0 1 0-3.535 3.536L34.477 19 20.335 33.142a2.5 2.5 0 0 0 3.536 3.536l15.91-15.91ZM0 21.5h38.013v-5H0v5Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        

</>
        



    )
}

export default OnBoarding