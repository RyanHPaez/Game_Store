import Card from "react-bootstrap/Card";
import { useState } from "react";
import {  useEffect } from "react";
import axios from "axios";
import { GameDataContext } from "../context/gameDataContext";
import SearchResultsTest from './SearchResultsTest';
//All commented functions are only tests

export default function Header() {

  //-----------1.This runs on page load-------------------------->
  const [gameData, setGameData] = useState([]);
  const [input, setInput] = useState('');
  //-----------1.This runs on page load-------------------------->
  useEffect(  () => {
    axios.get(`http://localhost:3005/app/games`)
      .then(response => setGameData(response.data));
  }, []);

  //----------------2.This is executed when user submits form-------
    const handleSearch = (e) => {
        e.preventDefault();
        setInput(e.target[0].value)
    }

    const gameImg = gameData.map(item=>item.gameImage);
    console.log('imga', gameImg)
    const searchedGame = gameData.filter((item)=>{
      return item.title === input
    })
    console.log(searchedGame);

    const display = searchedGame.map((item,i)=>{
      return(
        <h1 key={i}>{item.title}</h1>
      )
    })

  return (
    <Card>
      <Card.Body
        style={{
          textAlign: "left",
          width: "250px",
          marginLeft: "185px",
          marginTop: "400px",
          // position: "fixed",
        }}
      >
       
        <Card.Title
          style={{
            fontSize: "19px",            
          }}
          className="mb-2 text-muted"
        >
          The best Games are found here.
        </Card.Title>
        {/* onSubmit={display} */}
        
        <form onSubmit={handleSearch}>
          <input
            // ref={term}
            type="text"
            placeholder="Enter Game Search Here"
            // onChange={(e)=>setInput(e.target.value)}
          />
          <button>Submit</button>
        </form>

       {display}
       <img src ={gameImg[0]}></img>
      <GameDataContext.Provider value = {display}>
        <SearchResultsTest/>
      </GameDataContext.Provider>
       
      </Card.Body>
    </Card>
  );
}
