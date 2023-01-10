import React from 'react'
import { useState } from 'react'

function Chercher({setCle}) {
    const[state , setState]=useState("")
  return (
    <div >
     <h2>composant ChercheBar</h2>  
     <p>Entrer le mot cle de recherche</p>
     <input
     value={state}
     onChange={(e)=>setState(e.target.value)}></input>
     <button onClick={()=>setCle(state)} >Recherche</button>
     
    </div>
  )
}

export default Chercher