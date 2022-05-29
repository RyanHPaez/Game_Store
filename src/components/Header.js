import Card from "react-bootstrap/Card";
// import axios from "axios";
import { useState } from "react";
// import {useState, useEffect, createContext} from 'react';
// import SearchResults from './SearchResults';
// import { useState, useEffect } from "react";

//All commented functions are only tests
export default function Header() {
  // useEffect(()=>{
  //     console.log('use effect');
  // },[])

  //-----------1.This runs on page load-------------------------->
  // useEffect(() => {
  //     axios.get(`http://localhost:3001/app/games`)
  //     .then(response => setDataRetreived(response.data));
  //   }, []);
  //   const [dataRetreived, setDataRetreived] = useState('');

  //----------------2.This is executed when user submits form-------
  // const [input, setInput] = useState('');
  // const [titleName, setTitleName] = useState('');
  // const display = (e) => {
  //     e.preventDefault();
  //     console.log('data retried', dataRetreived);
  //     setInput(e.target.value);

  // }
  // dataRetreived.map(item=>item.title == input ? setTitleName(item) : console.log(`Cannot find`));
  // useEffect(()=>{display},[]);

  const [input, setInput] = useState("");

  return (
    <Card
      style={{
        width: "100%",
        backgroundImage:
          "url(https://www.ask.com/wp-content/uploads/sites/3/2021/11/e67af4c685145fd3374375d03bdab77a.jpg)",
        height: "550px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundColor: "#DFEED6",
        backgroundSize: "800px 500px",
        
      }}
    >
      <Card.Body
        style={{
          textAlign: "left",
          width: "400px",
          marginLeft: "50px",
          
        }}
      >
        <Card.Title
          style={{
            fontSize: "60px",
            flex: 1, 
            justifyContent: 'center', 
            alignItems:"center", 
            lineHeight:"100px",
            justifyContent: 'space-between'
          }}
        >
          Order you games for pickup today!
        </Card.Title>
        <Card.Subtitle
          style={{
            fontSize: "15px",
          }}
          className="mb-2 text-muted"
        >
          The best Games are found here.
        </Card.Subtitle>
        {/* onSubmit={display} */}
        <form>
          <input
            // ref={term}
            type="text"
            placeholder="Enter Game Search Here"
            // onChange={(e)=>setInput(e.target.value)}
          />
          {/* <button onClick={display}>Submit</button> */}
        </form>

        <h1>{input}</h1>
      </Card.Body>
    </Card>
  );
}
