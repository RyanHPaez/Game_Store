import './App.css';
import Sidebar from './components/SideBar';
import Home from './components/Home';
import Games from './components/Games';
import GameReviews from './components/GameReviews';
import Cart from './components/Cart'
import { GameDataContext } from './context/gameDataContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar';


function App() {

  useEffect(  () => {
    axios.get(`http://localhost:3005/app/games`)
      .then(response => setGameData(response.data));
  }, []);
  const [gameData, setGameData] = useState([]);

  return (

    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> 
      <GameDataContext.Provider value = {gameData}>
        <SearchBar/>
        <Router>
              <Routes>
                  <Route exact path = "/" element={<Home/>}/>
                  <Route exact path = "/games" element={<Games/>}/>
                  <Route exact path = '/gameReview' element={<GameReviews/>}/>
                  <Route exact path = '/cart' element={<Cart/>}/>
              </Routes>
        </Router>
      </GameDataContext.Provider>
    </div>
  );
}

export default App;