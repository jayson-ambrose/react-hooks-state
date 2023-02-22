import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const[state, setState] = useState(true);

  function increment() {
    setCount((currentCount) => currentCount + 1);
  }

  function switchState() {
    setState(!state)
    console.log(state)
  }

  return( 
  <div>
    <button onClick={increment}>I have been clicked {count} times</button>
    <button onClick={switchState}>{state ? "true" : "false"}</button>
  </div>
  )
}

export default Counter;
