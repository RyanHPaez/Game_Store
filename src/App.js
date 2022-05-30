import './App.css';
import Header from './components/Header';
import TopBar from "./components/TopBar";
import React from 'react';
import Sidebar from './SideBar';
import './App.css';
// import Burger from "./components/Burger";


// import SearchBar from './components/SearchBar'
// import  SearchContext  from "./context/SearchContext"

function App() {
  // return (
  //   <div className="App">
  //     {/* <SearchBar /> */}
      
  //     {/* <Burger /> */}
      


      
  //   </div>
  // );
  return (
    <div className="App" id="outer-container">
      
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      <TopBar />
      <Header />
      </div>
    </div>
  );
}
 




export default App;

