import React from 'react'
import useCounter from "./useCounter"

const App = () => {
    const{count,Add,Sub}=useCounter()

  return (
    <div>
        <h1> Count:{count}</h1>
        <button onClick={Add}>Add</button>
        <button onClick={Sub}>Sub</button>
    </div>
  )
}

export default App