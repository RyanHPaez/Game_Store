import React, { useContext } from 'react'
import { GameDataContext } from '../context/gameDataContext'

function Cart (){

  const gameData = useContext(GameDataContext);
    console.log(gameData)

    const display = gameData.map(game=>{
      return (
        <div>
          <img src={game.gameImage}></img>
          <p>{game.title}</p>
          <p>{game.price}</p>
        </div>
      )
    })
    //started a checkout function that will sum the prices from each game and display them onto the cart page
    // const checkout = gameData.map(game)

    return (
      
      <form style={{
        border: '2px solid red',
        color:"yellow",
        backgroundColor: "red",
        borderBottomColor:"blue",
        borderTopColor:"blue",
        float: "right",
        padding:"10px",
        marginTop:"2px",
        borderRadius: '20px',
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
      </form>
      
    )
}

export default Cart