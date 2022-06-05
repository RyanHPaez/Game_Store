import Card from "react-bootstrap/Card";
import { useContext, useState } from "react";
import { GameDataContext } from "../context/gameDataContext";
import SearchResultsTest from './Games';
//All commented functions are only tests

export default function SearchBar() {

  //-----------1.This runs on page load-------------------------->
  const gameData = useContext(GameDataContext);
  console.log('game: ', gameData)
  const [input, setInput] = useState('');

  //----------------2.This is executed when user submits form-------
    const handleSearch = (e) => {
        e.preventDefault();
        setInput(e.target[0].value)
    }

    //--------------This block of code is for the search bar-----------------
    const searchedGame = gameData.filter((item)=>{
      return item.title === input
    })
    console.log(searchedGame);

    // const display = searchedGame.map((item,i)=>{
    //   return(
    //     <h2>{item.title}</h2>
    //   )
    // })

  return (
    <Card>
      <Card.Body
        style={{
          textAlign: "left",
          width: "250px",
          marginLeft: "185px",
          marginTop: "400px",
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
    
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter Game Search Here"
          />
          <button>Submit</button>
        </form>
        
       {/* <SearchResultsTest value = {display}/> */}
      </Card.Body>
    </Card>
  );
}