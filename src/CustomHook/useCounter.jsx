import React, { useState } from 'react'

const useCounter = () => {
  const[count,setCount]=useState(0)
  function Add(){
    setCount(count+1)
  }
  function Sub(){
    
    setCount(count-1)
  }
  return {

    count,Add,Sub
  }
}

export default useCounter