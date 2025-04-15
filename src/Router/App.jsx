import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Router/Home.jsx"
import Contact from "./Router/Contact.jsx"
import Service from "./Router/Service.jsx"
import NavBar from "./Router/NavBar.jsx"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Service" element={<Service />}/>
        <Route path="*" element={<NavBar />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App