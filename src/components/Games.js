//This component is to test the displayed searched results from the user using props and useContext
import React, { useEffect, useState } from "react";
import { useContext } from "react";
// import { propTypes } from 'react-bootstrap/esm/Image'
import { GameDataContext } from "../context/gameDataContext";
import { CartContext } from "../context/cartContext";
import Cart from "./Cart";
import GameDetails from "./GameDetails";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
// import App from '../App'
//this is a testing comonent
function Games(props) {


  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState([]);
  const [hoverPopup, setHoverPopup] = useState(false)

  useEffect(() => {}, []);

  const gameData = useContext(GameDataContext);
//This sets the state variable to the game that was clicked
  const selectedGame = (game) => {
    setCartItems(game);
    window.alert(`Added ${game.title} to cart!`)
  };

//Cart array
  const handleClick = (e) => {
    e.preventDefault();
    let newItem = {};
    newItem = cartItems;
    setTotalCartItems([...totalCartItems, newItem]);
    
  };


  const displayDetail = ((item, i) => {


    return (
      

      <div
        style={{
          background: "black",
          width: "280px",
          height: "200px",
          margin: "20px",
          textAlign: "center",
          display: "inline-table",
          border: "2px solid red",
          backgroundColor: "black",
          borderBottomColor: "blue",
          borderTopColor: "blue",
          color: "red",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <form>
          <h2 key={i}>{item.title}</h2>
          <img src={item.gameImage}></img>
          <p>${item.price}</p>
         
        </form>
      </div>
    );
  });
 
  const display = gameData.map((item, i) => {

    return (
      //  css this till line
      <div
        style={{
          background: "black",
          width: "280px",
          height: "200px",
          margin: "20px",
          textAlign: "center",
          display: "inline-table",
          border: "2px solid red",
          backgroundColor: "black",
          borderBottomColor: "blue",
          borderTopColor: "blue",
          color: "red",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <form onSubmit={handleClick}>
          <h2 key={i}>{item.title}</h2>
          <img src={item.gameImage} onMouseOver={() => {setHoverPopup(true);selectedGame(item);displayDetail(cartItems) }} onMouseOut={()=>{setHoverPopup(false)}}></img>
          <p>${item.price}</p>
          <button
            onClick={() => {
              selectedGame(item);
            }}
            >
            Add To Cart
          </button>
        </form>
      </div>
    );
  });


  return (
    <div
      style={{
        backgroundColor: "black",
        borderBottom: "50px solid lightblue",
        borderTop: "50px solid lightblue",
      }}
    >
      <div>
      <CartContext.Provider value={totalCartItems}>
        <Cart />
      </CartContext.Provider>

      {/* <a href='/cart'>Cart</a> */}
      <h5>Games: {display} </h5>
      </div>
      <div >
      <CartContext.Provider value={cartItems}>
        <GameDetails trigger={hoverPopup} setTrigger={setHoverPopup} cartitem={{cartItems}} src={cartItems.gameImage}>
          <h3 className="detailTitle">{cartItems.title}</h3>
          <img className="detailView" src={cartItems.gameImage}></img>
          <div className="detailDescription">
         <span className="description">{cartItems.description}</span> <br/>
          <br/>
          Genre: {cartItems.genre}<br/>
          Platform: {cartItems.platform}<br/>
          Price: {cartItems.price}<br/>
          ESRB Rating: {cartItems.rating}<br/>
          
          </div>
         
          
        </GameDetails>
      </CartContext.Provider>
      </div>
    </div>
  );
}

export default Games;
