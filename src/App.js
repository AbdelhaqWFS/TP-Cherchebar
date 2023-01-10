
// import Input from "./Input";
// import Clock from "./clock";
import Chercher from "./chercher";
 import List from "./list";
import { useState } from "react";
function App() {
  const[cle,setCle]=useState("")
  
  

  const list=[ {nom:"banane",type:"fruit"}, 
  {nom:"orange",type:"fruit"}, 
  {nom:"pomme",type:"fruit"}, 
  {nom:"raisins",type:"fruit"}, 
  {nom:"kiwi",type:"fruit"}, 
  {nom:"tomate",type:"legume"}, 
  {nom:"carotte",type:"legume"}, 
  {nom:"pomme de terre",type:"legume"}, 
  {nom:"navet",type:"legume"}, 
  {nom:"poivron",type:"legume"} ]




  return (
    <div>
      <h1>Composant app</h1>
      <Chercher   setCle={setCle}/> 

      <h1>le type :{cle}</h1>
     <List listCle={list.filter((item)=>item.type == cle)} ></List>

    </div>
    
  );
}

export default App;
