import React,{useState} from 'react'
const App = () => {
    const[isopen, setIsopen]=useState(false)
    function open(){
        setIsopen(true)
    }
    function close(){
        setIsopen(false)
    }
  return (
    <div>
        <button onClick={open}>Open</button>
        {isopen&&(
            <div>
                <h1>Yes bro</h1>
                <button onClick={close}>Close</button>
            </div>
        )}
    </div>
  )
}
export default App