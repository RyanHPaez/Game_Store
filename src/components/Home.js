//We need to work on the Css home page here
import { GameDataContext } from "../context/gameDataContext";
import {useContext, useEffect} from 'react'
import {useState} from 'react'

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
      <h1>Welcome: {welcomeMessage}</h1>
    </div>
  );
}

export default Home;
