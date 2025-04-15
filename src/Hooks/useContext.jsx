import React from 'react'
import { createContext,useState } from 'react'
import Child1 from "./Hooks/Child1"
import "./App.css"

const ThemeContext= createContext()
const App = () => {
    const [mode,setMode]=useState("light")
    const changeTheme=()=>{
        setMode((prevMode)=>(prevMode==="light"?"dark":"light"))
    }
  return (
    <div className={mode}>
        <ThemeContext.Provider value={{mode,changeTheme}}>

            <Child1/>
        </ThemeContext.Provider>
    </div>
  )
}

export default App
export {ThemeContext}