import TinderCard from 'react-tinder-card'
import {useState} from 'react'

const Dash = () => {

    const db = [
        {
          name: 'Jimi Hendrix',
          url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-197621-84894709.jpg'
        },
      ]
      
        const characters = db
        const [lastDirection, setLastDirection] = useState()
      
        const swiped = (direction, nameToDelete) => {
          console.log('removing: ' + nameToDelete)
          setLastDirection(direction)
        }
      
        const outOfFrame = (name) => {
          console.log(name + ' left the screen!')
        }
      
        return (
            <>
            
          <div className="dashboard">
            <div className="swipe-container">
                <div className="card-container">
                    {characters.map((character) =>
                    <TinderCard 
                        className='swipe' 
                        key={character.name} 
                        onSwipe={(dir) => swiped(dir, character.name)} 
                        onCardLeftScreen={() => outOfFrame(character.name)}>

                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                            <h3>{character.name}</h3>
                        </div>
                    </TinderCard>
              )}

              <div className="swipe-info">
                {lastDirection ? <p>You swiped: {lastDirection}</p> : <p/>}
              </div>



                </div>
            </div>
        </div>
        </>
        )
      }
    
export default Dash