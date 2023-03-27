import TinderCard from 'react-tinder-card'
import {useState} from 'react'
import axios from 'axios';
var currentImage = 1;

const Dash = () => {

  console.log("currentImage: " +currentImage);

  const [cards, setCards] = useState("card-container");

  const [profile, setProfile] = useState("invisible");

  const [chat, setChat] = useState("invisible");


  const [imageInput1, setImageInput1] = useState("edit-input");
  const [imageInput2, setImageInput2] = useState("invisible");
  const [imageInput3, setImageInput3] = useState("invisible");
  const [imageInput4, setImageInput4] = useState("invisible");
  const [imageInput5, setImageInput5] = useState("invisible");
  const [imageInput6, setImageInput6] = useState("invisible");

  const [instrumentArray, setInstrumentArray] = useState([]);
  const [seekingInstrumentArray, setSeekingArray] = useState([]);

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

  const nextImage = (e) => {
    e.preventDefault();
    console.log("next image clicked");

    

    currentImage++;
    console.log(currentImage);
    if (currentImage === 1){
      setImageInput1("edit-input");
      setImageInput2("invisible");
      setImageInput3("invisible");
      setImageInput4("invisible");
      setImageInput5("invisible");
      setImageInput6("invisible");
    }
    if (currentImage === 2){
      setImageInput1("invisible");
      setImageInput2("edit-input");
      setImageInput3("invisible");
      setImageInput4("invisible");
      setImageInput5("invisible");
      setImageInput6("invisible");
    }
    if (currentImage === 3){
      setImageInput1("invisible");
      setImageInput2("invisible");
      setImageInput3("edit-input");
      setImageInput4("invisible");
      setImageInput5("invisible");
      setImageInput6("invisible");
    }
    if (currentImage === 4){
      setImageInput1("invisible");
      setImageInput2("invisible");
      setImageInput3("invisible");
      setImageInput4("edit-input");
      setImageInput5("invisible");
      setImageInput6("invisible");
    }
    if (currentImage === 5){
      setImageInput1("invisible");
      setImageInput2("invisible");
      setImageInput3("invisible");
      setImageInput4("invisible");
      setImageInput5("edit-input");
      setImageInput6("invisible");
    }
    if (currentImage === 6){
      setImageInput1("invisible");
      setImageInput2("invisible");
      setImageInput3("invisible");
      setImageInput4("invisible");
      setImageInput5("invisible");
      setImageInput6("edit-input");
    }

    if(currentImage > 6 || currentImage < 1){
      currentImage = 1;
      setImageInput1("edit-input");
      setImageInput2("invisible");
      setImageInput3("invisible");
      setImageInput4("invisible");
      setImageInput5("invisible");
      setImageInput6("invisible");
    }

  }

  const prevImage = (e) => {
    e.preventDefault();
    console.log("prev image clicked");

    currentImage--;
    if(currentImage < 1){
      currentImage = 6;
    }
    if (currentImage == 1){
      setImageInput1("edit-input");
      setImageInput2("invisible");
      setImageInput3("invisible");
      setImageInput4("invisible");
      setImageInput5("invisible");
      setImageInput6("invisible");
    }
    if (currentImage == 2){
      setImageInput1("invisible");
      setImageInput2("edit-input");
      setImageInput3("invisible");
      setImageInput4("invisible");
      setImageInput5("invisible");
      setImageInput6("invisible");
    }
    if (currentImage == 3){
      setImageInput1("invisible");
      setImageInput2("invisible");
      setImageInput3("edit-input");
      setImageInput4("invisible");
      setImageInput5("invisible");
      setImageInput6("invisible");
    }
    if (currentImage == 4){
      setImageInput1("invisible");
      setImageInput2("invisible");
      setImageInput3("invisible");
      setImageInput4("edit-input");
      setImageInput5("invisible");
      setImageInput6("invisible");
    }
    if (currentImage == 5){
      setImageInput1("invisible");
      setImageInput2("invisible");
      setImageInput3("invisible");
      setImageInput4("invisible");
      setImageInput5("edit-input");
      setImageInput6("invisible");
    }
    if (currentImage == 6){
      setImageInput1("invisible");
      setImageInput2("invisible");
      setImageInput3("invisible");
      setImageInput4("invisible");
      setImageInput5("invisible");
      setImageInput6("edit-input");
    }

    if(currentImage > 6 || currentImage < 1){
      currentImage = 1;
      setImageInput1("edit-input");
      setImageInput2("invisible");
      setImageInput3("invisible");
      setImageInput4("invisible");
      setImageInput5("invisible");
      setImageInput6("invisible");
    }
    
  }
 


  const guitarButton = () => {
    console.log("guitar button clicked")
    setProfile("invisible");
    setChat("invisible");
    setCards("card-container");
  }

  const profileButton = () => {
    console.log("profile button clicked");
    setChat("invisible");
    setCards("invisible");
    setProfile("profile-container");

  }

  const chatButton = () => {
    console.log("chat button clicked");
    setProfile("invisible");
    setCards("invisible");
    setChat("chat-container");
  }


  const db = [
        {
          name: 'Jimi Hendrix',
          age: "22",
          url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-197621-84894709.jpg',
          bio: "I'm a musician and I love to play guitar. I'm looking for someone who is also into music and can play an instrument. I'a"
        },
        {
          name: 'aJimi Hendrix',
          age: "22",
          url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-197621-84894709.jpg',
          bio: "I'm a musician and I love to play guitar. I'm looking for someone who is also into music and can play an instrument. I'a"
        },
        {
          name: 'bJimi Hendrix',
          age: "22",
          url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-197621-84894709.jpg',
          bio: "I'm a musician and I love to play guitar. I'm looking for someone who is also into music and can play an instrument. I'a"
        },
      ]
      
        const characters = db;
        const [lastDirection, setLastDirection] = useState();
      
        const swiped = (direction, nameToDelete) => {
          console.log('removing: ' + nameToDelete);
          setLastDirection(direction);
        }
      
        const outOfFrame = (name) => {
          console.log(name + ' left the screen!')
        }
      
        return (
        <>

        
          <div className="dashboard">
            <div className="nav-center">
                <div className="logo">BAAND<span>.</span></div>
            </div>
            <div className="swipe-container">
              <div className={cards}>
                {characters.map((character) =>
                    <TinderCard 
                        preventSwipe={['up', 'down']}
                        className='swipe' 
                        key={character.name} 
                        onSwipe={(dir) => swiped(dir, character.name)} 
                        onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>


                        <svg width="400px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--emojione-monotone profile-more-button" preserveAspectRatio="xMidYMid meet"><path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm5.143 28.305V49H26.857V30.305H16L32 15l16 15.305H37.143z" fill="rgb(233, 194, 24)"></path></svg>
                        <div className="profile-info">
                          <h2 className="profile-name">{character.name}, <span className="age-text">{character.age}</span></h2>
                          <p className="profile-bio">{character.bio}</p>
                        </div>
                      </div>
                    </TinderCard>
            )}
                </div>

                <div className={profile}>
                  <div className="edit-container">
                    {/* profile editing form */}
                    <form className="edit-form">
                      <label className="edit-label">Name</label>
                      <input className="edit-input" type="text" placeholder="Name" />
                      <label className="edit-label">Age</label>
                      <input className="edit-input" type="text" placeholder="Age" />
                      <label className="edit-label">Bio</label>
                      <textarea className="edit-input edit-bio" type="text" placeholder="" />
                      <label className="edit-label">Profile Pictures</label>
                      <div className="edit-image-container">
                        <button onClick={prevImage}></button>
                        <input id="imageInput1" className={imageInput1} type="text" placeholder="Profile Picture 1"/>
                        <input id="imageInput2" className={imageInput2} type="text" placeholder="Profile Picture 2"/>
                        <input id="imageInput3" className={imageInput3} type="text" placeholder="Profile Picture 3"/>
                        <input id="imageInput4" className={imageInput4} type="text" placeholder="Profile Picture 4"/>
                        <input id="imageInput5" className={imageInput5} type="text" placeholder="Profile Picture 5"/>
                        <input id="imageInput6" className={imageInput6} type="text" placeholder="Profile Picture 6"/>
                        <button onClick={nextImage}></button>
                      </div>


                    </form>
                    <h4>I play</h4>
                    <div className="instrument-selection">
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
                    <h4>Seeking</h4>
                    <div className="instrument-selection">
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
                  <button className="edit-button">Save</button>
                </div>



          {/* DASH BUTTONS */}
          <div className="dash-button-container">
          <button className="dash-button" onClick={chatButton}>
          <svg className="guitar-svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM16 9C15.4477 9 15 9.44772 15 10C15 10.5523 15.4477 11 16 11H16.01C16.5623 11 17.01 10.5523 17.01 10C17.01 9.44772 16.5623 9 16.01 9H16ZM6.93417 2C6.95604 2 6.97799 2 7 2L17.0658 2C17.9523 1.99995 18.7161 1.99991 19.3278 2.08215C19.9833 2.17028 20.6117 2.36902 21.1213 2.87868C21.631 3.38835 21.8297 4.0167 21.9179 4.67221C22.0001 5.28388 22.0001 6.0477 22 6.9342V13.0658C22.0001 13.9523 22.0001 14.7161 21.9179 15.3278C21.8297 15.9833 21.631 16.6117 21.1213 17.1213C20.6117 17.631 19.9833 17.8297 19.3278 17.9179C18.7161 18.0001 17.9523 18.0001 17.0658 18L14 18C13.8864 18 13.7757 18.036 13.6838 18.1028L9.27568 21.3087C8.32858 21.9975 7 21.321 7 20.1499V18C6.22604 18 5.44118 18.0213 4.67221 17.9179C4.0167 17.8297 3.38835 17.631 2.87868 17.1213C2.36902 16.6117 2.17028 15.9833 2.08215 15.3278C1.99991 14.7161 1.99995 13.9523 2 13.0658L2 7C2 6.97799 2 6.95604 2 6.93417C1.99995 6.04769 1.99991 5.28387 2.08215 4.67221C2.17028 4.0167 2.36902 3.38835 2.87868 2.87868C3.38835 2.36902 4.0167 2.17028 4.67221 2.08215C5.28387 1.99991 6.04769 1.99995 6.93417 2Z" fill="rgb(233, 194, 24)"/>
          </svg>
          </button>
          <button className="dash-button" onClick={guitarButton}>
          <svg className="guitar-svg" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	              viewBox="0 0 32 32" xmlSpace="preserve">
            <polyline className="st1" points="17.6,15.9 16.1,14.4 24.1,6.5 25.5,7.9 "/>
            <polygon className="st1" points="26.2,8.7 23.3,5.8 27.7,2.9 29.1,4.3 "/>
            <polyline className="st1" points="17.7,11.4 3.1,15.9 12.5,19.5 16.1,28.9 20.6,14.3 "/>
            <line className="st1" x1="13.2" y1="15.9" x2="16.1" y2="18.8"/>
          </svg>
          </button>
          <button className="dash-button" onClick={profileButton}>
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="rgb(233, 194, 24)"/></svg>
          </button>
        </div>
            </div>
        </div>




        
        
      </>
        )
      }
    
export default Dash

