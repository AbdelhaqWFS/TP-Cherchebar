import React from 'react'

function list(props) {
  return (
    <div>
        
        {props.listCle.map((elm)=>{return(<p>{elm.nom}</p>)})}
    </div>
  )
}

export default list