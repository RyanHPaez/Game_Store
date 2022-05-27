import {useContext} from 'react'

function SearchResults(props){
    console.log(props.data)
    // const gameData = useContext(GameContext);
    return(
        
        <h1>This is the seacrh results: {props.data} </h1>
    
    )
}

export default SearchResults