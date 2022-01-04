import React from "react";

export default function Saludar(props) {
  return (
    <div>
      <h2>Hola {props.userInfo.name}</h2>
      <button onClick={() => props.saludarFn(props.userInfo.name)}>Saludar</button>
    </div>
  );
}
