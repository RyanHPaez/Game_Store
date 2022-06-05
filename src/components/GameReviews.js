import {useContext} from 'react'
import { GameDataContext } from '../context/gameDataContext'



function GameReview(){

    const gameData = useContext(GameDataContext)
    console.log('Game data', gameData)
    
  
    console.log(gameData);

    const display = gameData.map((item,i)=>{
      return(
        <div
        style={{
          content:"center",
          textAlign: "center",
          margin:"50px",
          display:  "inline-Block",
          position:"relative",
          // display: 'inline-block',
    width: '400px ',
    height: '5px'
        }}>
        
            <img key={i} src={item.gameImage} 
            
            >

            </img>
            <h3 key={i}><a href="/gameDetail">{item.title}</a></h3>
        </div>
      )
    })

    return(
        <div style={{backgroundColor:'yellow'}}>
          <a href='/cart'>
        Cart
      </a>
            {display}
        </div>
    )
}

export default GameReview