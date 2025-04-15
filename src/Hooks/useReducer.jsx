import React, { useReducer } from 'react'

const App = () => {
    const initializerArg=0;
    function reducer(state,action){
        switch (action) {
            case "increment":
                return state+1;

                case "decrement":
                return state-1;


                case "Mul":
                return state*2;
                
        
            default:
                return state;
        }
    }
    const [state,dispatch] =useReducer(reducer,initializerArg)

  return (
    
    <div>
        <h1> {state}</h1>
        <button onClick={()=>dispatch("increment")}>Add</button>
        <button onClick={()=>dispatch("decrement")}>Add</button>
        <button onClick={()=>dispatch("Mul")}>Mul</button>

    </div>
  )
}

export default App