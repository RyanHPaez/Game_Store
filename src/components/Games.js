//This component is to test the displayed searched results from the user using props and useContext
import { useEffect, useState } from 'react'
import {useContext} from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { GameDataContext } from '../context/gameDataContext'
import { CartContext } from '../context/cartContext'
import Cart from './Cart'
//this is a testing comonent
function Games (props){
    

  const [cartItems, setCartItems]= useState([]);
  const [totalCartItems, setTotalCartItems] = useState([]);
 

  // const addGame = (newCartItem) =>{
  //   return([...cartItems, newCartItem])
  // }

  useEffect(() => {}, [])
 

    const gameData = useContext(GameDataContext)
    console.log('Game data', gameData)
   
    const selectedGame = (game) => {
     
    
      // selection=game
      console.log('game', game)
      setCartItems(game)
      console.log('cart items', cartItems)
      
      
    }
    
    // const handleAddToCart = () =>{
      
    //   console.log('cart items', cartItems)   
      
      
    // }
    const handleClick = (e) =>{
      e.preventDefault()
      let newItem = {};
      newItem = cartItems;
      setTotalCartItems([...totalCartItems,newItem])
    }
    
    console.log('total cart', totalCartItems)
    
    const display = gameData.map((item,i)=>{
      return(

        //  css this till line 
        <div style =
        {{
          // marginTop: "80px",
          margin:"20px",
          textAlign: "center",
          display: "inline-table",
          position:"static",
          border: '2px solid red',
        backgroundColor: "lightblue",
        borderBottomColor:"blue",
        borderTopColor:"blue",
        borderRadius: '20px',
        position:"relative",
        }}>
         <form onSubmit={handleClick}>
        <h1 key={i}>{item.title}</h1>
        <img src = {item.gameImage}></img>
        <p>${item.price}</p>
        <button onClick={() =>{selectedGame(item)}} >Add To Cart</button>
        </form>
        </div>
      )
    })
// const addToCart = (e) => {
// console.log(e.target[0].value)
// }
    return(
      
        <div style={{backgroundColor:'yellow'}}>
          <a href='/cart'>Cart</a>
          <h5>Games: {display} </h5>
          <CartContext.Provider value={totalCartItems}>
            <Cart/>
          </CartContext.Provider>
        </div>
    )
}

export default Games
