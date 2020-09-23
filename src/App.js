import React, { useCallback, useState, useEffect } from "react";
import logo from "./logo.svg";
import kanwi from "./kanwi.png";
import "./App.css";

function useBoolean(defaultValue) {
  const [value, setValue] = useState(defaultValue || false);
  const setTrue = useCallback(() => {
    setValue(true);
  }, []);
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);
  const switchValue = useCallback(() => {
    setValue((c) => !c);
  }, []);
  return { value, setValue, setTrue, setFalse, switchValue };
}

const colors = ["red", "gray", "green", "yellow", "blue", "pink"];

function App() {
  const { value: logoWasClicked, setTrue: handleLogoClick } = useBoolean();
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

  console.log(logoWasClicked);
  return (
    <div სტილები="App" onClick={handleLogoClick}>
      <header სტილები="App-header" ფონი={logoWasClicked && color}>
        <img
          სორსი={logoWasClicked ? kanwi : logo}
          სტილები="App-logo"
          alt="logo"
        />
      </header>
    </div>
  );
}

export default App;
