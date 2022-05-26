import Card from "react-bootstrap/Card"
import axios from "axios"
import {useState, useEffect, useContext} from 'react'

//All commented functions are only tests
export default function Header() {

    // const [input, setInput] = useState('');
    const [gameData, setGameData] = useContext([]);

    const display = (e) => {
        e.preventDefault();
      axios.get('http://localhost:3001/app/name')
        .then(response => setGameData(response.data[0].title))
    }

    useEffect(()=>{display},[])

    return (
        
        <Card style={{ width: '100%', backgroundImage: "url(https://www.ask.com/wp-content/uploads/sites/3/2021/11/e67af4c685145fd3374375d03bdab77a.jpg)", height: "550px", backgroundRepeat: "no-repeat", backgroundPosition: "right", backgroundColor: "#DFEED6", backgroundSize: "800px 500px" }}>
            <Card.Body style={{ textAlign: "left", width: "300px", marginLeft: "50px", marginTop: "0px" }}>
                <Card.Title style={{ fontSize: "60px" }}>Order you games for pickup today!</Card.Title>
                <Card.Subtitle style={{ fontSize: "15px" }} className="mb-2 text-muted">The best Games are found here.</Card.Subtitle>   
                
        <form onSubmit={display}>
            <input 
                // ref={term}
                type="text" 
                placeholder='Enter Game Search Here' 
                // onChange={(e)=>setInput(e.target.value)}
            />
            <button>Submit</button>
        </form>
           <h1>{input}</h1>
            </Card.Body>
        </Card>
    )
}