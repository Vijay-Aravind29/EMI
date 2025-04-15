import React, { useState } from 'react'

const App = () => {
  const [value,setValue]=useState("")
 
  return (
    <div>
      <input  onChange={((e)=>setValue(e.target.value))}/>
      <p>{value}</p>
    </div>
  )
}
export default App