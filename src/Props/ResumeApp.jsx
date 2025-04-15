import React from "react";
import Header from "./Props/Header";
import Content from "./Props/Content";
import ProfileImage from "./Props/ProfileImage";
import Skills from "./Props/Skills";
import "./App.css";

const App = () => {
  const Dark = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  };

  return (
    <div className="hero">
      <Header />
      <div className="container">
        <Content />
        <ProfileImage />
      </div>
      <Skills dark={Dark} />
    </div>
  );
};

export default App;