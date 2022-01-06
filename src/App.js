import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  const [stateCar, setStateCar] = useState(false);

  const onOffFn = () => {
    // setStateCar(!stateCar);
    setStateCar(prevValue => !prevValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>El Auto esta {stateCar ? "Encendido" : "Apagado"} </h2>
        <button onClick={onOffFn}>Switch</button>
      </header>
    </div>
  );
}

export default App;
