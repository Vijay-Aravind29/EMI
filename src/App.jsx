import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Project7 Crud/Home";
import Create from "./Project7 Crud/Create";
import Edit from "./Project7 Crud/Edit";
import "./index.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Employee Management</h1>
        <nav className="space-x-4 mb-4">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
