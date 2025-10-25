import "./App.css";
import jumbotron from "./assets/jumbotron-black.png";
import logo from "./assets/logo.png";
import NavItem from "./NavItem";
import vr_photo from "./assets/vr_photo.png";
import React, { useState, useRef, useEffect } from "react";
import ScrollToTopButton from "./ScrollToTop";
import BlobCursor from "./BlobCursor";
function App() {
  const sections = [
    { id: "aboutMe", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "beyond", label: "Beyond Code" },
  ];

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // section is considered active when 60% visible
    };

     const observer = new IntersectionObserver((entries) => {
    const visibleSections = entries
      .filter(entry => entry.isIntersecting)
      .map(entry => entry.target.id);

    if (visibleSections.length > 0) {
      // Set the last visible section as active (lowest one in view)
      setActiveSection(visibleSections[visibleSections.length - 1]);
    } else {
      // If user scrolls above all sections, deactivate all
      setActiveSection(null);
    }
  }, observerOptions);

  sections.forEach(section => {
    const element = document.getElementById(section.id);
    if (element) observer.observe(element);
  });

  return () => {
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.unobserve(element);
    });
    observer.disconnect();
  };
}, [sections]);

  return (
    <div className="App">
      <BlobCursor/>
      <div className="NavBar">
        <img className="NavBarLogo" src={logo} alt="logo"></img>
        <div>
          {sections.map((section) => (
            <NavItem
              key={section.id}
              targetId={section.id}
              label={section.label}
              isActive={activeSection === section.id}
            />
          ))}
          {/* <NavItem label="About Me" targetId="aboutMe"/>
          <NavItem label="Experience" targetId="experience"/>
          <NavItem label="Education" targetId="education"/>
          <NavItem label="Skills" targetId="skills"/>
          <NavItem label="Projects" targetId="projects"/>
          <NavItem label="Beyond Code" targetId="beyond" /> */}
        </div>

        <button class="PrimaryButton">
          <span>Contact Me</span>
        </button>
      </div>

      <img src={jumbotron} className="Jumbotron" alt="Jumbotron" />

      <div className="AboutMe">
        <h1 id="aboutMe">About Me</h1>
        <div className="GlassCard">
          <div>
            <img src={vr_photo} alt="Just me wearing a VR headset" />
          </div>
          <p>
            Software Engineer with more than 3 years experience in interactive
            systems, XR development, and data-driven application design. Skilled
            in JavaScript/TypeScript, React, C#, and Unity, I combine software
            engineering with a strong sense of creativity and visual design.My
            work focuses on web and immersive technologies, building intuitive,
            modular, and engaging applications, systems, and simulations. I’m
            particularly interested in creating user experiences that merge
            technical depth with aesthetics, fostering learning, exploration,
            and innovation across digital environments..
          </p>
        </div>
      </div>

      <div className="cardcontainer">
        <ScrollToTopButton />
        
      </div>
      
    </div>
  );
}

export default App;
