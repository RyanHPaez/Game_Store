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
          marginTop: "80px",
          marginLeft: "30px",
          textAlign: "center",
          // margin:"20px",
          display: "inline-table",
          position:"static",
          border: '2px solid red',
        backgroundColor: "lightblue",
        borderBottomColor:"blue",
        borderTopColor:"blue",
        borderRadius: '20px',
        position:"relative",
        }}>
        <h2 key={i}>{item.title}</h2>
            <img key={i} src={item.gameImage} 
            
            >

            </img>
            <h3 key={i}><a href="/gameDetail">{item.title}</a></h3>
        </div>
      )
    })

    return(
      <div id='home-cart' >
      
      <h5>Games: {display} </h5>
    </div>
    )
}

export default GameReview