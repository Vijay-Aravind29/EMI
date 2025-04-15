import React, { useState,useMemo } from 'react'

const App = () => {
    const [add,setAdd]=useState(0)
    const [sub,setSub]=useState(0)

const Mul=useMemo(()=>{
    console.log("Can you see problem");

    return add * 2;
    },[add])
  return (

    <div>
        <h1>Add:{add}</h1>
        <h1>Sub:{sub}</h1>
        <button onClick={()=> setAdd(add+1)}>Add</button>


        <button onClick={()=> setSub(sub-1)}>Sub</button>
    </div>
  )
}

export default App