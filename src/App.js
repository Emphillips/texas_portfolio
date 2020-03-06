import React, { useState, useEffect } from 'react';
import './App.css';
import desktopImage from './images/texas.jpg';
import mobileImage from './images/mobile.jpg';

const App = () => {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
      <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
          <div className="App-content">
              <h1>Pineapples</h1>
              <p>They are good</p>
          </div>
      </div>
  );
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};

export default App;