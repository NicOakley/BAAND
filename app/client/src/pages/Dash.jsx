import TinderCard from 'react-tinder-card'
import {useState} from 'react'
import Nav from '../components/Nav'
import axios from 'axios';

const Dash = () => {


  const db = [
        {
          name: 'Jimi Hendrix',
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
                <div className="card-container">
                {characters.map((character) =>
                    <TinderCard 
                        preventSwipe={['up', 'down']}
                        className='swipe' 
                        key={character.name} 
                        onSwipe={(dir) => swiped(dir, character.name)} 
                        onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>

                        <div className="profile-info">
                          <h2 className="profile-name">{character.name}, <span className="age-text">{character.age}</span></h2>
                          <p className="profile-bio">{character.bio}</p>
                        </div>
                      </div>
                    </TinderCard>
            )}
                </div>
                <div className="dash-button-container">
          <button className="dash-button" onClick={console.log("button")}>
          <svg className="guitar-svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM16 9C15.4477 9 15 9.44772 15 10C15 10.5523 15.4477 11 16 11H16.01C16.5623 11 17.01 10.5523 17.01 10C17.01 9.44772 16.5623 9 16.01 9H16ZM6.93417 2C6.95604 2 6.97799 2 7 2L17.0658 2C17.9523 1.99995 18.7161 1.99991 19.3278 2.08215C19.9833 2.17028 20.6117 2.36902 21.1213 2.87868C21.631 3.38835 21.8297 4.0167 21.9179 4.67221C22.0001 5.28388 22.0001 6.0477 22 6.9342V13.0658C22.0001 13.9523 22.0001 14.7161 21.9179 15.3278C21.8297 15.9833 21.631 16.6117 21.1213 17.1213C20.6117 17.631 19.9833 17.8297 19.3278 17.9179C18.7161 18.0001 17.9523 18.0001 17.0658 18L14 18C13.8864 18 13.7757 18.036 13.6838 18.1028L9.27568 21.3087C8.32858 21.9975 7 21.321 7 20.1499V18C6.22604 18 5.44118 18.0213 4.67221 17.9179C4.0167 17.8297 3.38835 17.631 2.87868 17.1213C2.36902 16.6117 2.17028 15.9833 2.08215 15.3278C1.99991 14.7161 1.99995 13.9523 2 13.0658L2 7C2 6.97799 2 6.95604 2 6.93417C1.99995 6.04769 1.99991 5.28387 2.08215 4.67221C2.17028 4.0167 2.36902 3.38835 2.87868 2.87868C3.38835 2.36902 4.0167 2.17028 4.67221 2.08215C5.28387 1.99991 6.04769 1.99995 6.93417 2Z" fill="rgb(233, 194, 24)"/>
          </svg>
          </button>
          <button className="dash-button">
          <svg className="guitar-svg" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	              viewBox="0 0 32 32" xmlSpace="preserve">
            <polyline className="st1" points="17.6,15.9 16.1,14.4 24.1,6.5 25.5,7.9 "/>
            <polygon className="st1" points="26.2,8.7 23.3,5.8 27.7,2.9 29.1,4.3 "/>
            <polyline className="st1" points="17.7,11.4 3.1,15.9 12.5,19.5 16.1,28.9 20.6,14.3 "/>
            <line className="st1" x1="13.2" y1="15.9" x2="16.1" y2="18.8"/>
          </svg>
          </button>
          <button className="dash-button">
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="rgb(233, 194, 24)"/></svg>
          </button>
        </div>
            </div>
        </div>




        
        
      </>
        )
      }
    
export default Dash

