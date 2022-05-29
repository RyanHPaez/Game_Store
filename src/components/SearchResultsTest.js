//This component is to test the displayed searched results from the user using props and useContext

import {useContext} from 'react'
import { GameDataContext } from '../context/gameDataContext'
function SearchResultsTest(){

    const gameData = useContext(GameDataContext)
    console.log('Game data', gameData)

    return(
        
        <h1>This is the search results: {gameData} </h1>
    
    )
}

export default SearchResultsTest