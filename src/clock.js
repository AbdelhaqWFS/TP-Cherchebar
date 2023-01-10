import { useState } from "react";

function Clock() {
  const [state,setState]=useState(0)
  const increment =()=>{setState(state+1)}
  const decrement =()=>{setState(state-1)}
  return (
    <div >
      <h1>{state}</h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}

export default Clock;
