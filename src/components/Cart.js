import React, { useContext } from 'react'
import { GameDataContext } from '../context/gameDataContext'
import Footer from './Footer'

function Cart (prop){

  const gameData = useContext(GameDataContext);
    console.log(gameData)

    const display = gameData.map(game=>{
      return (
        <div>
          <img src={game.gameImage}></img>
          <p>{game.title}</p>
          <p>${game.price}</p>
        </div>
      )
    })
    //started a checkout function that will sum the prices from each game and display them onto the cart page
    // const checkout = gameData.map(game)

    return (
      
      <form style={{
        border: '2px solid blue',
        color:"yellow",
        backgroundColor: "red",
        borderBottomColor:"blue",
        borderTopColor:"blue",
        float: "right",
        padding:"10px",
        marginTop:"0px",
        borderRadius: '20px',
        textAlign: "center",          
          display: "inline-table",
          position:"static"
      }}>
      
      <h3>Your Cart</h3>
      
      {display}
      <p>Tax</p>
      <p>Total: </p>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Checkout
          </button>
        </div> 
      </form>,
      <h1
      style={{
        color: "Red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      Ready to check out?</h1>
    )
}

export default Cart