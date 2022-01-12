import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [contador, setContador] = useState(0);

  const onOffFn = () => {
    setStateCar(!stateCar);
    setContador(contador + 1);
  };

  useEffect(() => {
    console.log("Cont:" + contador);
  }, [contador]);

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
