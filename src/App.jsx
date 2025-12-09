import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Parent() {
  const [count, setCount] = useState(0)

  function handleClick(v){
    // alert(`halo from parent, child:${v}`)
    console.log(`halo from parent, child:${v}`)
  }

  return (
    <>
      <h2>LIFTING STATE UP</h2>    
      <div className="parent">      
        <Child handleClick={handleClick}/>
      </div>
    </>
  )
}


function Child({handleClick}){
  return(
    <div className="child">
      <button id="btn" onClick={()=>handleClick(1)}> 1 </button>
      <button id="btn" onClick={()=>handleClick(2)}> 2 </button>
      <button id="btn" onClick={()=>handleClick(3)}> 3 </button>

      <button id="btn" onClick={()=>handleClick(4)}> 4 </button>
      <button id="btn" onClick={()=>handleClick(5)}> 5 </button>
      <button id="btn" onClick={()=>handleClick(6)}> 6 </button>
    </div>
  )
}


