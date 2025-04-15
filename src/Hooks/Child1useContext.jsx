import React from 'react'
import {ThemeContext} from "../App"
import { useContext } from 'react'


const Child1 = () => {
    const {mode,changeTheme}=useContext(ThemeContext)
  return (
    <div>
        <h1>My name is Aravind</h1>
        <button onClick={changeTheme}>Switch to {mode==="light"?"dark":"light"}mode
        </button>
    </div>
  )
}

export default Child1