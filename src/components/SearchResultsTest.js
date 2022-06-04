//This component is to test the displayed searched results from the user using props and useContext

import {useContext} from 'react'
import { GameDataContext } from '../context/gameDataContext'

//this is a testing comonent
function SearchResultsTest(){

    const gameData = useContext(GameDataContext)
    console.log('Game data', gameData)
    const display = gameData.map((item,i)=>{
      return(
        <h1 key={i}>{item.title}</h1>
    
      )
    })

    return(
        <div style={{backgroundColor:'yellow'}}>
        <h5>This is the search results: {display} </h5>
        </div>
    
    )
}

export default SearchResultsTest
