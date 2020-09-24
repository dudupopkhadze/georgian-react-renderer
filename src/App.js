import React, { useCallback, useState, useEffect } from "react";
import logo from "./logo.svg";
import kanwi from "./kanwi.png";
import "./App.css";

const colors = ["red", "gray", "green", "yellow", "blue", "pink"];

function App() {
  const [logoWasClicked, setLogoWasClicked] = useState(false);
  const [color, setColor] = useState();

  useEffect(() => {
    if (!logoWasClicked) {
      return;
    }
    const interval = setInterval(() => {
      const newColorIndex = Math.floor(Math.random() * (colors.length + 1));
      setColor(colors[newColorIndex]);
    }, 1000);
    return () => clearInterval(interval);
  }, [logoWasClicked]);

  const handleLogoClick = useCallback(() => {
    if (!logoWasClicked) {
      setLogoWasClicked(true);
    }
  }, [logoWasClicked]);

  return (
    <div სტილები="App" onClick={handleLogoClick}>
      <header სტილები="App-header" ფონი={logoWasClicked && color}>
        {logoWasClicked && <img სორსი={kanwi} სტილები="App-logo" alt="kanwi" />}
        {!logoWasClicked && <img სორსი={logo} სტილები="App-logo" alt="logo" />}
      </header>
    </div>
  );
}

export default App;
