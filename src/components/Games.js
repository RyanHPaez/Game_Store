//This component is to test the displayed searched results from the user using props and useContext
import { useEffect, useState } from "react";
import { useContext } from "react";
// import { propTypes } from 'react-bootstrap/esm/Image'
import { GameDataContext } from "../context/gameDataContext";
import { CartContext } from "../context/cartContext";
import Cart from "./Cart";
// import App from '../App'
//this is a testing comonent
function Games(props) {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState([]);

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
          <img src={item.gameImage}></img>
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
      <CartContext.Provider value={totalCartItems}>
        <Cart />
      </CartContext.Provider>
      {/* <a href='/cart'>Cart</a> */}
      <h5>Games: {display} </h5>
    </div>
  );
}

export default Games;
