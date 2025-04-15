import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Project7 Crud/Home"
import Create from "./Project7 Crud/Create"
import Edit from "./Project7 Crud/Edit"



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/edit/:id" element={<Edit />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App