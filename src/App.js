import "./App.css";
import Sidebar from "./components/SideBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Games from "./components/Games";
import GameReviews from "./components/GameReviews";
import Cart from "./components/Cart";
import { GameDataContext } from "./context/gameDataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";



function App() {
  useEffect(() => {
    axios
      .get(`http://localhost:3005/app/games`)
      .then((response) => setGameData(response.data));
  }, []);
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3005/signup/users`)
      .then((response) => setUserData(response.data));
  }, []);
  const [userData, setUserData] = useState([]);

  const [username, setUsername] = useState('Please log in');
  
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
            marginTop: "-50px",
            marginBottom: "20px",
            marginRight: "20px",
            textAlign: "center",
            color: 'blue',
            backgroundColor: "white",
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
          Log-In
        </a>
        <SearchBar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home user={username}/>} />
            <Route exact path="/games" element={<Games />} />
            <Route exact path="/gameReview" element={<GameReviews />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/log-in" element={<Login/>} />
          </Routes>
        </Router>
        <Footer />
      </GameDataContext.Provider>
    </div>
  );
}

export default App;
