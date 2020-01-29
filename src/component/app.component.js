import React, { useState, useCallback } from "react";
import "./app.component.scss";

function MyComponent() {
  const [name, setState] = useState("anshul GoYAL");
  const handleCahnge = useCallback(e => setState(e.target.value));
  return (
    <>
      <div className= "intro">{name}</div>
      <input value={name} onChange={handleCahnge} />
      <p>Hello React</p>
    </>
  );
}

export default MyComponent;
