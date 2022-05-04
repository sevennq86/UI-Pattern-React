import './App.css';
import Navbar from './Navbar';
import { useState } from 'react';

function App() {
  const [currentImage, setCurrentImage] = useState("")
  return (
    <div className="App">
      <Navbar setCurrentImage={setCurrentImage}/>
      <header className="App-header">
        <h1>🐶 My Favorite Dog Breeds 🐕</h1>
        <h3>Click hamburger menu on the left to see images</h3>
        <div id="menu-bar">
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>


        </div>
      </header>
      <div className="image-container">
        <img src={`${currentImage}` }/>
      </div>
      </div>
  );
}

export default App;
