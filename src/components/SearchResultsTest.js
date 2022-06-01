//This component is to test the displayed searched results from the user using props and useContext

import {useContext} from 'react'
import { GameDataContext } from '../context/gameDataContext'
function SearchResultsTest(){

    const gameData = useContext(GameDataContext)
    console.log('Game data', gameData)

    return(
        
        <h5>This is the search results: {gameData} </h5>
    
    )
}

export default SearchResultsTest