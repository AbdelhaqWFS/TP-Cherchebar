import React from 'react'
import { useState } from 'react'
function Input() {
    const [state,setState]=useState("")
    function Handler(){
        if(state.length>4){return <p></p>}
        else{return <p>your pass is too short</p>}
    }
  return (
    <div>
        <input type="password"
        value={state}
        onChange={(e)=>setState(e.target.value)}></input>
        <Handler></Handler>

    </div>
  )
}

export default Input