import { useEffect } from "react";                                                           //8.) 'useEffect' didnt work cuz its dumb (i am) you have to import it otherwise it returns like 4,000 errors
import { useState } from "react";                                                            //14.) obligitory useState import



const PlayerList = () => {                                                                   //4.) this is gonna be my component that grabs all the players 
    const [allPlayersList, setAllPlayersList] = useState([]);                                //1.) made state thats going to hold all of the players in the API - leave this empty so it can be filled by API - after step 13 i moved it out of app.jsx and brought it here to keep things organized
   
   
    useEffect(() => {                                                                        //7.) 'useEffect' is the primer that will allow us to use 'fetch' - must pass an arrow function within its () to use it properly
        const getPlayers = async() => {                                                      //10.) react got pissed when I tried to make that function in step 9 ASYNC, interupting our peace - You have to make a DEDICATED async function - not only that but i had to put the step 9 code inside this function
            const response = await fetch                                                      
            ('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players');      //9.) This and the line above is our fetch request
            const responseJson = await response.json();                                      //12.) our API is useless 100% of the time if we dont use .JSON on it - remeber to AWAIT!!!
            const allPlayers = responseJson.data.players;                                    //13.) after some digging we used .JSON to return 100+ arrays filled with player info - what this step actually did was trim the fat and pin point the exact data we want to see
                setAllPlayersList(allPlayers)                                                //15.) Here we finally placed the array (which can be updated at any time) as the 'SET VALUE' thanks to the STATE
        }
       getPlayers()                                                                          //11.) after i placed that code inside the new variable my console.log stopped working (god im jealous) - this is becuase we had to invoke our new ASYNC function here that we made in step 10 
    },[]);                                                                                   //14.) "USE EFFECT" WILL RUN INFINITLEY UNLESS WE PUT THIS EMPTEY ARRAY HERE!!!!!!!
    return (
        <>
        <h2>Super cool players</h2>
        <section>
        {
            allPlayersList.map((singlePlayer) => {                                          //16.) testing by throwing it on the page finally - we HAVE to use .MAP on on array though to narrow it down
              return( <div className="cards" key ={singlePlayer.name}>                     {/*17.) created/returning a div so we can append our super sick array - added KEY to it  after i tested it*/}
                      <h3>{singlePlayer.name}</h3>
                      <img src={singlePlayer.imageUrl}></img>
                      <p>{singlePlayer.status}</p>
                      <p>{singlePlayer.breed}</p>
                      </div>           
              )          
            })}  
        </section>                                                                 
        </>
    )
}

export default PlayerList;