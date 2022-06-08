//We need to work on the Css home page here
import { GameDataContext } from "../context/gameDataContext";
import {useContext, useEffect} from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

function Home(props) {
  //This needs styling 06/08
  const welcomeMessage = !props.user[0].username ? 'Please log-in or sign-up' : props.user[0].username
  return (
    <div
      id="home-cart"
      style={{
        borderBottom: "40px solid lightblue",
        borderTop: "40px solid lightblue",
      }}
    >
      <h3
      style = {{
        background: "black",
      width: "50%",
      margin: "0px",
      textAlign: "center",
      display: "center",
      backgroundColor: "black",
      borderBottomColor: "blue",
      color: "red",
      borderRadius: "20px",
      position: "relative",
      border: "2px solid lightblue",
      borderTop: "2px solid lightblue",
      left:'25%',
      }}
      
      >Welcome: {welcomeMessage}</h3>
      <h4>Browse through our selection of the newest games!</h4>
      <Link to='/games'>Games</Link>
    </div>
  );
}

export default Home;
