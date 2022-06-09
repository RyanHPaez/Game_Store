import "./App.css";
import Sidebar from "./components/SideBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Games from "./components/Games";
import GameReviews from "./components/GameReviews";
import Cart from "./components/Cart";
import GameDetails from "./components/GameDetails";
import { GameDataContext } from "./context/gameDataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import SignUp from "./components/SignUp";
<<<<<<< HEAD
import { CartContext } from "./context/cartContext";
=======
import Login from "./components/Login";
import DeleteAccount from "./components/DeleteAccount";

>>>>>>> 714f9e2411fde1fe7389a4e3945b1247b2c4566f



function App() {

const [gameData, setGameData] = useState([]);
useEffect(() => {
    axios
      .get(`http://localhost:3005/app/games`)
      .then((response) => setGameData(response.data));
<<<<<<< HEAD
  }, []);
  const [gameData, setGameData] = useState([]);
  
  const cartItems = useContext(CartContext)

  return (
    <div className="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <CartContext.Provider value={cartItems}>
        <GameDataContext.Provider value={gameData}>
          <h1
            style={{
              textAlign: "Center",
              marginTop: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
              textSizeAdjust: "auto",
            }}
          >
            Game Store
          </h1>
          <a
            href="/cart"
            style={{
              float: "right",
              display: "flex",
              marginTop: "-50px",
              marginBottom: "20px",
              marginRight: "20px",
              textAlign: "center",
              border: "2px solid red",
              backgroundColor: "white",
              borderBottomColor: "blue",
              borderTopColor: "blue",
              borderRadius: "5px",
              position: "static",
            }}
          >
            Cart
          </a>
          <br />
          
          <a
            href="/sign-up"
            style={{
              float: "right",
              display: "flex",
              marginTop: "-30px",
              marginRight: "20px",
              textAlign: "center",
              border: "2px solid red",
              backgroundColor: "white",
              borderBottomColor: "blue",
              borderTopColor: "blue",
              borderRadius: "5px",
              marginLeft: "10px",
              position: "relative",
            }}
          >
            Sign-Up
          </a>
          <SearchBar />
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/games" element={<Games />} />
              <Route exact path="/gameReview" element={<GameReviews />} item={CartContext} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/sign-up" element={<SignUp />} />
            </Routes>
          </Router>
          <Footer />
        </GameDataContext.Provider>
      </CartContext.Provider>
=======
}, []);


const [welcomeUser, setWelcomeUser] = useState('Please log in');
//This will toggle the link depending if a user is logged in
const logInLogOut = welcomeUser === 'Please log in' ? <a href='/log-in'>Log-in</a> : <a href='#'>Log-out</a>
 
  return (
    <div className="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <GameDataContext.Provider value={gameData} >
        <h1
          style={{
            textAlign: "Center",
            marginTop: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "red",
            textSizeAdjust: "auto",
          }}
        >
          Game Store
        </h1>
        <a
          href="/cart"
          style={{
            float: "right",
            display: "flex",
            marginTop: "-40px",
            marginRight: "20px",
            textAlign: "center",
            backgroundColor: "white",
            color: 'blue',
            borderRadius: "5px",
            marginLeft: "10px",
            position: "relative",
          }}
        >
          Cart
        </a>
        <br />
        
        <a
          href="/sign-up"
          style={{
            float: "right",
            display: "flex",
            marginTop: "-40px",
            marginRight: "20px",
            textAlign: "center",
            backgroundColor: "white",
            color: 'blue',
            borderRadius: "5px",
            marginLeft: "10px",
            position: "relative",
          }}
        >
          Sign-Up
        </a>
        <br />

        <a
          href="/log-in"
          style={{
            float: "right",
            display: "flex",
            marginTop: "-40px",
            marginRight: "20px",
            textAlign: "center",
            backgroundColor: "white",
            color: 'blue',
            borderRadius: "5px",
            marginLeft: "10px",
            position: "relative",
          }}
        >
          {logInLogOut}
        </a>
        <SearchBar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home user={welcomeUser}/>} />
            <Route exact path="/games" element={<Games />} />
            <Route exact path="/gameReview" element={<GameReviews />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/log-in" element={<Login setWelcomeUser={setWelcomeUser}/>}/>
            <Route exact path="/deleteAccount" element={<DeleteAccount />} />
          </Routes>
        </Router>
        <Footer />
      </GameDataContext.Provider>
>>>>>>> 714f9e2411fde1fe7389a4e3945b1247b2c4566f
    </div>
  );
}

export default App;
