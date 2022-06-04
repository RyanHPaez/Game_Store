import './App.css';
// import Header from './components/Header';
// import TopBar from "./components/TopBar";
// import Nav from './components/nav';
import Sidebar from './components/SideBar';
import SignUp from './components/SignUp';
import Home from './components/Home';
import SearchResultsTest from './components/SearchResultsTest';
import GameReviews from './components/GameReviews';
import Cart from './components/Cart'
import { GameDataContext } from './context/gameDataContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'

// import Burger from "./components/Burger";


function App() {

  useEffect(  () => {
    axios.get(`http://localhost:3005/app/games`)
      .then(response => setGameData(response.data));
  }, []);
  const [gameData, setGameData] = useState([]);

  return (

    <div className="App">
      <a href = "/cart">Cart</a>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      {/* <Nav />  */}
      <Router>
          <GameDataContext.Provider value = {gameData}>
            <Routes>
                <Route exact path = "/home" element={<Home/>}/>
                <Route exact path = "/games" element={<SearchResultsTest/>}/>
                <Route exact path = '/gameReview' element={<GameReviews/>}/>
                <Route exact path = '/cart' element={<Cart/>}/>
            </Routes>
          </GameDataContext.Provider>
      </Router>
    </div>
  );
}

export default App;