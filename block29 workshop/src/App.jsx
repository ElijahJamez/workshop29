// import { useState } from 'react'
import './App.css'
import PlayerList from './Components/PlayerList';                  //3.) Imported this real quick even though its blank right now
import { useState } from 'react';                                  //6.) impoted this to get my states working



const App = () => {

const [players, setPlayers] = useState([]);                        //1.) made state thats going to hold all of the players in the API - we have to leave this empty so it can be filled up by said API easily
const [singlePlayer, setSinglePlayer] = useState([null])           //2.) made a state that will hold an individual player that the user chose - we pass it "null" (falsy) which basically = "nothing is selected right now" - its becuase this is somthing the user might not always want like if they ~dont~ want more details



  return (
    <>
      <h1>Puppy Bowl Bonanza</h1> 
      <PlayerList />                                               {/* 5.) placed my super cool empty component here */}
    </>
  ) 
}

export default App
