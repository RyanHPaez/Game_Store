//This component is to test the displayed searched results from the user using props and useContext
import { useState } from "react";
import { useContext } from "react";
import { GameDataContext } from "../context/gameDataContext";

//this is a testing comonent
function Games() {
  const gameData = useContext(GameDataContext);
  console.log("Game data", gameData);
  const [cart, setCart] = useState([]);
  const display = gameData.map((item, i) => {
    return (
      //  css this till line

      <div
        style={{
          background: "black",
          overflowY: "scroll",
          width: "280px",
          height: "200px",
          overflow: "scroll",
          margin: "20px",
          textAlign: "center",
          display: "inline-table",
          position: "static",
          border: "2px solid red",
          backgroundColor: "black",
          borderBottomColor: "blue",
          borderTopColor: "blue",
          color: "red",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <h3 key={i}>{item.title}</h3>
        <img src={item.gameImage}></img>
        <p>${item.price}</p>
        <button>Add To Cart</button>
      </div>
    );
  });
  // const addToCart = (e) => {
  // console.log(e.target[0].value)
  // }
  return (
    <div
      id="home-cart"
      style={{
        border: "20px solid black",
      }}
    >
      <h5> {display} </h5>
    </div>
  );
}

export default Games;
