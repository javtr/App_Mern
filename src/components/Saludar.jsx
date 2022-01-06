import React from "react";

export default function Saludar(props) {

let {userInfo, saludarFn} = props;
let {name = "valor default", age = "00"} = userInfo;

  return (
    <div>
      <h2>Hola {name}</h2>
      <button onClick={() => saludarFn(name,age)}>Saludar</button>
    </div>
  );
}
