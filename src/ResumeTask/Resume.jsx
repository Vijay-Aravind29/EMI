import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./App.css";
import "./assets/Images/img1.jpg";


function App() {
  let tl = gsap.timeline();
  let ease = "power3.out";

  return (
    <div className="hero">
      <Header timeline={tl} ease={ease} />
      <div className="container">
        <Content timeline={tl} />
        <ProfileImage timeline={tl} ease={ease} />
      </div>
      <Skills timeline={tl} />
    </div>
  );
}




function Header({ timeline, ease }) {
  let logo = useRef(null);
  let menuItems = useRef([]);

  useEffect(() => {
    timeline.from(logo.current,menuItems.current, {
      opacity: 1,
      y: 50,
      duration: 1,
      stagger: 0.3,
    });
  }, [timeline, ease]);

  return (
    <div className="header">
      <div className="logo" ref={logo}>Vijay Aravind...</div>
      <div className="menu">
        {["HOME", "SKILLS"].map((item, index) => (
          <div
            key={index}
            className="menu-item"
            ref={(el) => (menuItems.current[index] = el)}
          >
            {item}
          </div>
        ))}
        <button className="fullscreen">Full Screen</button>
      </div>
    </div>
  );
}

function Content({ timeline }) {
  let title = useRef(null);
  let subtitle = useRef(null); // Ref for "React Developer"
  let buttons = useRef(null);

  useEffect(() => {
    // Animation for "React Developer" text
    if (subtitle.current) {
      const letters = subtitle.current.textContent.split(""); // Split text into letters
      subtitle.current.textContent = ""; // Clear the original text

      letters.forEach((letter, index) => {
        const span = document.createElement("span"); // Create a span for each letter
        span.textContent = letter;
        subtitle.current.appendChild(span);

        // GSAP animation for each letter
        gsap.fromTo(
          span,
          { opacity: 0, y: 20 }, // Initial state (hidden)
          {
            opacity: 1, // Fade in
            y: 0, // Move up
            duration: 0.5, // Animation duration
            delay: index * 0.1, // Staggered delay
            ease: "power3.out",
            repeat: -1, // Loop indefinitely
            repeatDelay: letters.length * 0.1 + 1, // Delay before repeating
            yoyo: true, // Reverse the animation (letters go out)
            yoyoEase: "power3.inOut",
          }
        );
      });
    }

    // Animation for other elements
    if (title.current && buttons.current) {
      gsap.fromTo(
        [title.current, buttons.current],
        { opacity: 0, y: 100, skewY: 10 },
        { opacity: 1, y: 0, skewY: 0, stagger: 0.3, duration: 1 }
      );
    }
  }, []);

  return (
    <div className="content">
      <h1 ref={title}>Hello, I'm Vijayaravind</h1>
      <h2 ref={subtitle}>React Developer</h2> {/* Text to animate */}
      <p>I hope you're doing well</p>
      <div className="buttons" ref={buttons}>
        <button className="hire-me">Hire Me</button>
        <button className="resume">Resume ⬇</button>
      </div>
      <div className="social-icons">
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </div>
  );
}


function ProfileImage({ timeline, ease }) {
  let imageRef = useRef(null);

  useEffect(() => {
    timeline.from(imageRef.current, {
      opacity: 1,
      scale: 1.5,
      ease: ease,
      duration: 1.5,
    });
  }, [timeline, ease]);

  return (
    <div className="profile-image" ref={imageRef}>
      <div className="image-overlay"></div>
      <img src="./assets/Images/img1.jpg" alt="Profile" />
    </div>
  );
}

function Skills({ timeline }) {
  let skillsRef = useRef(null);

  useEffect(() => {
    timeline.from(skillsRef.current, {
      opacity: 1,
      y: 50,
      duration: 1,
      stagger: 0.3,
    });
  }, [timeline]);

  // const skills = [
  //   { name: "HTML", level: "80%" },
  //   { name: "CSS", level: "70%" },
  //   { name: "JavaScript", level: "60%" },
  //   { name: "Material UI", level: "50%" },
  //   { name: "Bootstrap", level: "50%" },
  //   { name: "Tailwind CSS", level: "50%" },
  // ];

  return (
    <div className="skills-section" ref={skillsRef}>
      <h2>Here are my skills.</h2>
      <div className="skills-container">
        <div className="skills-list">
          {[
            { name:  "HTML", level: 90 },
            { name: "CSS", level: 80 },
            { name: "Javascript", level: 75 },
            { name: "Material UI", level: 70 },
            { name: "Boot Strap", level: 75 },
            { name: "Tailwind CSS", level: 75 },
          ].map((skill, index) => (
            <div key={index} className="skill">
              <span>{skill.name}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
        {/* Tech cards moved to the right side */}
        <div className="tech-cards-right">
          <div className="tech-card">React Js</div>
          <div className="tech-card">Next Js</div>
        </div>
      </div>
      <div className="icons-img">
<img src="https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" alt="" height={"40px"} width={"40px"} />
<img src="https://cdn.brandfetch.io/nextjs.org/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed" alt="" height={"40px"} width={"40px"} />
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" height={"40px"} width={"40px"} />
</div>

    </div>
    
  );
}

export default App; 