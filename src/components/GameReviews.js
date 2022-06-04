import {useContext} from 'react'
import { GameDataContext } from '../context/gameDataContext'
function GameReview(){

    const gameData = useContext(GameDataContext)
    console.log('Game data', gameData)
    
  
    console.log(gameData);

    const display = gameData.map((item,i)=>{
      return(
        <div>
            <img key={i} src={item.gameImage} height= "120px"></img>
            <h3 key={i}><a href="/gameDetail">{item.title}</a></h3>
        </div>
      )
    })

    return(
        <div>
            {display}
        </div>
    )
}

export default GameReview