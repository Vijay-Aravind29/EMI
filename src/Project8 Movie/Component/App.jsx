import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Project8 Movie/Component/Home/index"
import MovieDetails from "./Project8 Movie/Component/MovieDetails/index"
import Footer from "./Project8 Movie/Component/Footer/index"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}


export default App