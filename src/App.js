import './App.css';
import Header from './components/Header';
import TopBar from "./components/TopBar";
import Footers from './components/Footers';
import Nav from './components/nav'
import React from 'react';
import Sidebar from './components/SideBar';
import './App.css';
// import { Footer } from 'react-bootstrap/lib/Modal';


function App() {
 
  return (
    <div className="App" id="outer-container">
      
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      <Nav />
      <TopBar />
      <Header />
      <Footers />
      
      </div>
    </div>
  );
}
 




export default App;

