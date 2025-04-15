import React from "react";

const Skills = ({ dark }) => {
  return (
    <div className="skills-section">
      <h2>Here are my skills.</h2>
      <div className="skills-container">
        <div className="skills-list">
          {[
            { name: "HTML", level: 90 },
            { name: "CSS", level: 80 },
            { name: "JavaScript", level: 75 },
            { name: "Material UI", level: 70 },
            { name: "Bootstrap", level: 75 },
            { name: "Tailwind CSS", level: 75 },
          ].map((skill, index) => (
            <div key={index} className="skill">
              <span>{skill.name}</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="tech-cards-right">
          <div className="tech-card">React Js</div>
          <div className="tech-card">Next Js</div>
        </div>
      </div>
      <div className="icons-img">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256"
          alt=""
          height={"40px"}
          width={"40px"}
        />
        <img
          src="https://cdn.brandfetch.io/nextjs.org/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed"
          alt=""
          height={"40px"}
          width={"40px"}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt=""
          height={"40px"}
          width={"40px"}
        />
      </div>
      <button onClick={dark}>Dark Mode</button>
    </div>
  );
};
export default Skills;