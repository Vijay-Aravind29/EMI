import React,{useState} from 'react'

const WithCounter = (OriginalComponent) => {
  function NewComponent(){
  const [add,setAdd]=useState(0)
  function Add(){
    setAdd(add+1)
  }
  return (
    <OriginalComponent add={add} Add={Add}/>
  )
}

return NewComponent
}
export default WithCounter