// import React,{ useContext, useState } from "react";
// import { GameDataContext } from "../context/gameDataContext";
// import { CartContext } from "../context/cartContext";
// import DetailedReview from "./DetailReview";
// import '../DetailedReview.css'
// import e from "express";

// function GameReview(props) {
//   const gameData = useContext(GameDataContext);
//   console.log("Game data", gameData);

//   const [buttonPopup, setButtonPopup] = useState(false)

//   const gameInfo = useContext(CartContext);


//   const display = gameInfo.map((item, i) => {
//     return (
//       <div
//         style={{
//           background: "black",
//           width: "280px",
//           height: "200px",
//           margin: "20px",
//           textAlign: "center",
//           display: "inline-table",
//           border: "2px solid red",
//           backgroundColor: "black",
//           borderBottomColor: "blue",
//           borderTopColor: "blue",
//           color: "red",
//           borderRadius: "20px",
//           position: "relative",
//         }}
//         key={i}>
//           <form onSubmit={handleClick}>
//             <h2 key={i}>{item.title}</h2>
//             <img src={item.gameImage} triggerTwo={() => {setButtonPopup(true);}}></img>
//             <p>${item.price}</p>
//             <button onClick={() => {}}>
//               Reviews
//             </button>
//           </form>
//       </div>
//     );
//   });

//   return (
//     <div style={{ backgroundColor: "black" }}>
//       {/* <a href='/cart'>Cart</a> */}
//       <h5>Games: {display} </h5>
//       {/* <CartContext.Provider value={totalCartItems}>
//             <Cart/>
//           </CartContext.Provider> */}
//     </div>
//   );
// }

// export default GameReview;
