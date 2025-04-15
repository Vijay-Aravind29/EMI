import React from 'react'
import { useCallback,useState } from 'react'
import "./Child"

const App = () => {
    const [add,setAdd]=useState(0)
    function Add(){
        setAdd(add+1)
    }
    let learning =useCallback(()=> {},[])
  return (
    <div>
        <h1>{add}</h1>

        <Child learning={learning}></Child>
    </div>
  )
}

export default App