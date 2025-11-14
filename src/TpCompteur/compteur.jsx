import React, { useState } from "react";

function Compteur() {
    const [count,setcount]=useState(0)
    const uncrementer=()=>{
            setcount(count+1)
    }
    const descrementer=()=>{
            setcount(count-1)
    }
  return (
      
       <div>
        <h2>Click counter</h2>
        <button type="button" onClick={uncrementer}>+</button>
        <span>{count}</span>
        <button type="button" onClick={descrementer}>-</button>
       </div>
  );
  
}

export default Compteur;