//This component is to test the displayed searched results from the user using props and useContext
import { useState } from 'react'
import {useContext} from 'react'
import { GameDataContext } from '../context/gameDataContext'

//this is a testing comonent
function Games(){

    const gameData = useContext(GameDataContext)
    console.log('Game data', gameData)
    const [cart, setCart] = useState([])
    const display = gameData.map((item,i)=>{
      return(
        <div>
        <h1 key={i}>{item.title}</h1>
        <img src = {item.gameImage}></img>
        <p>{item.price}</p>
        <button>Add To Cart</button>
        </div>
      )
    })
// const addToCart = (e) => {
// console.log(e.target[0].value)
// }
    return(
      
        <div style={{backgroundColor:'yellow'}}>
          <a href='/cart'>Cart</a>
        <h5>This is the search results: {display} </h5>
        </div>
    )
}

export default Games
