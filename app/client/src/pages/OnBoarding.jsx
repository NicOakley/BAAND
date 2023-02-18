import Nav from '../components/Nav'
import {useState, useEffect} from 'react';

var currentQuestion = 0;
const numQuestions = 4;

const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const OnBoarding = () => {
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
        setInputClass("onboarding-input"); }

    // Onboarding questions
    var initialText = "What's your name?";
    var questions = [
        "How old are you?", 
        "Your instrument is...",
        "Seeking someone playing...", ];

    // Show text input
    const showTextInput = () => { setTextInputClass("onboarding-input-text"); }

    // Show instrument selection
    const showInstrumentSelection = () => { setTitleClass("instrument-selection"); }

    // Show looking for selection
    const showLookingForSelection = () => { setTitleClass("instrument-selection"); }

    // Hide text input
    const hideTextInput = () => { setTextInputClass("invisible"); }

    // Hide instrument selection
    const hideInstrumentSelection = () => { setTitleClass("invisible"); }

    // Hide looking for selection
    const hideLookingForSelection = () => { setTitleClass("invisible"); }

    // Declare state variables
    const [currentInput, setCurrentInput] = useState("");
    const [firstName, setFirstName] = useState("ull");
    const [age, setAge] = useState(null);
    const [instrument, setInstrument] = useState(null);
    const [lookingFor, setLookingFor] = useState(null);
    const [titleClass, setTitleClass] = useState("onboarding-title");
    const [inputClass, setInputClass] = useState("onboarding-input");
    const [textInputClass, setTextInputClass] = useState("onboarding-input-text");
    const [instrumentSelectionClass, setInstrumentSelectionClass] = useState("invisible");
    const [seekingSelectionClass, setSeekingSelectionClass] = useState("invisible");

    const [text, setText] = useState(initialText);

    console.log(currentInput, firstName);
    
    // handle click event
    const handleClick = async event => {
        console.log(currentQuestion);
        event.preventDefault();
        if(currentQuestion >= numQuestions-1){
            console.log("done");
            setTitleClass("onboarding-title invisible");
            setInputClass("onboarding-input invisible");
        }

        if(currentQuestion == 0) {
            setFirstName(currentInput);
            console.log(firstName);
            continueToNextStage();
         
        }
        else if(currentQuestion == 1) {
            continueToNextStage();
            await sleep(270);
            hideTextInput();
            setInstrumentSelectionClass("instrument-selection")
        }
        else if(currentQuestion == 2) {
            continueToNextStage();
        }

    }


    return(
<>
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
                    onChange={(e) => setCurrentInput(e.target.value)}/>

                    {/* You are a... */}
                    <div className={instrumentSelectionClass}>
                        <button className="instrument-selection-item">GUITAR</button>
                        <button className="instrument-selection-item">BASS</button>
                        <button className="instrument-selection-item">DRUMS</button>
                        <button className="instrument-selection-item">VOCALS</button>
                        <button className="instrument-selection-item">KEYBOARD</button>
                        <button className="instrument-selection-item">UKELELE</button>
                        <button className="instrument-selection-item">FLUTE</button>
                        <button className="instrument-selection-item">BANJO</button>
                        <button className="instrument-selection-item">BAGPIPES</button>
                    </div>
                    {/* Looking for someone who plays...*/}
                    <div className={seekingSelectionClass}>
                        <button className="instrument-selection-item">GUITAR</button>
                        <button className="instrument-selection-item">BASS</button>
                        <button className="instrument-selection-item">DRUMS</button>
                        <button className="instrument-selection-item">VOCALS</button>
                        <button className="instrument-selection-item">KEYBOARD</button>
                        <button className="instrument-selection-item">UKELELE</button>
                        <button className="instrument-selection-item">FLUTE</button>
                        <button className="instrument-selection-item">BANJO</button>
                        <button className="instrument-selection-item">BAGPIPES</button>
                    </div>

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