import { useContext } from "react";
import { GameDataContext } from "../context/gameDataContext";

function GameReview() {
  const gameData = useContext(GameDataContext);
  const display = gameData.map((item, i) => {
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
        <h3 key={i}>{item.title}</h3>
        <img key={i} src={item.gameImage}></img>
        <h3 key={i}>
          <a href="/gameDetail">{item.title}</a>
        </h3>
      </div>
    );
  });

  return (
    <div
      style={{
        backgroundColor: "black",
        borderBottom: "50px solid lightblue",
        borderTop: "50px solid lightblue",
      }}>
      {/* <a href='/cart'>Cart</a> */}
      <h5>Games: {display} </h5>
      {/* <CartContext.Provider value={totalCartItems}>
            <Cart/>
          </CartContext.Provider> */}
    </div>
  );
}

export default GameReview;
