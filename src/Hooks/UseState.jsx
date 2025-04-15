import React,{useState} from 'react'

const App = () => {
  count [count,setCount]=useState(1);
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={()=>setCount(count+2)}>+</button>
    </div>
  )
}




export default App