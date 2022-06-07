import React, { useContext } from 'react'
import { GameDataContext } from '../context/gameDataContext'
import { CartContext } from '../context/cartContext';

function Cart (props){
  const cartItems = props;
  const gameData = useContext(GameDataContext);
    console.log(gameData)
 
  const checkout = useContext(CartContext)

  console.log('checkout', checkout)
  // const cartItemMap = cartItems.map((game, i) => {
  //   return(
  //     <Games key="" game={game}/>
  //   )
  // })
const display = checkout.map((cartItem) =>{
  return(
    
              <div>
                <img src={cartItem.gameImage}></img>
                <p>{cartItem.title}</p>
                <p>{cartItem.price}</p> 
              </div>
            
          )
})



  
    

   
    //started a checkout function that will sum the prices from each game and display them onto the cart page
    // const checkout = gameData.map(game)

    return (
      
      <form style={{
        border: '2px solid blue',
        position:"sticky",
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
          
      }}>
      
      <h3>Your Cart</h3>
      
    
      
      <div>
      {display}
      </div>

      <p>Tax</p>
      <p>Total: </p>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Checkout
          </button>
        </div> 
      </form>      
    )

    return (
      <div id='home-cart' >
      
      <h5>Games: {display} </h5>
    </div>
    )
}

export default Cart




