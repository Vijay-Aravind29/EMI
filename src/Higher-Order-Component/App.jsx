import React from 'react'
import WithCounter from './WithCounter'

const App = (props) => {
  return (
    <div>
        <h1>{props.add}</h1>
        <button onClick={props.Add}>Add</button>
        
        
    </div>
  )
}


export default WithCounter(App)