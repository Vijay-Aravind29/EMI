import React from "react";
import "./App.scss";


function App() {
  return (
   <div className="App">
    <form >
      <h1>SIGN UP HERE </h1>
      <input type="email" placeholder="Enter Your Email"/>
      <br />
      <input type="password" placeholder="Enter Your Password"/>
      <br />
      <button type="submit">Submit</button>
    </form>


   </div>
  );
}
export default App;