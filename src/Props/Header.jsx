import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Vijay Aravind...</div>
      <div className="menu">
        {["HOME", "SKILLS"].map((item, index) => (
          <div key={index} className="menu-item">
            {item}
          </div>
        ))}
        <button className="fullscreen">Full Screen</button>
      </div>
    </div>
  );
};

export default Header;