//This component is to test the displayed searched results from the user using props and useContext
import { useEffect, useState } from 'react'
import {useContext} from 'react'
// import { propTypes } from 'react-bootstrap/esm/Image'
import { GameDataContext } from '../context/gameDataContext'
import { CartContext } from '../context/cartContext'
import Cart from './Cart'
// import App from '../App'
//this is a testing comonent
function Games (props){
    
  const [cartItems, setCartItems]= useState([]);
  const [totalCartItems, setTotalCartItems] = useState([]);

  useEffect(() => {}, [])

    const gameData = useContext(GameDataContext)
   
    const selectedGame = (game) => {

      // console.log('game', game)
      setCartItems(game)
      // console.log('cart items', cartItems)
      
    }
    
    const handleClick = (e) =>{
      e.preventDefault()
      let newItem = {};
      newItem = cartItems;
      setTotalCartItems([...totalCartItems,newItem])
    }
    
    const display = gameData.map((item,i)=>{
      return(

        //  css this till line 
        
        <div style =
        {{
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
          
        }}>
         <form onSubmit={handleClick}>
        <h2 key={i}>{item.title}</h2>
        <img src = {item.gameImage}></img>
        <p>${item.price}</p>
        <button onClick={() =>{selectedGame(item)}} >Add To Cart</button>
        </form>
        </div>
      )
    })

    return(
      
        <div style={{backgroundColor:'black',
        borderBottom: "50px solid lightblue",
        borderTop: "50px solid lightblue",
        }}>
          <CartContext.Provider value={totalCartItems}>
            <Cart/>
          </CartContext.Provider>
          {/* <a href='/cart'>Cart</a> */}
          <h5>Games: {display} </h5>
          
        </div>
    )
}

export default Games;
