import "./App.css";
import jumbotron from "./assets/jumbotron-black.png";
import logo from "./assets/logo.png";
import NavItem from "./NavItem";
import vr_photo from "./assets/vr_photo.png"
import React, { useRef } from 'react';
import ScrollToTopButton from "./ScrollToTop";

function App() {
  const targetRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="NavBar">
        <img className="NavBarLogo" src={logo} alt="logo"></img>
        <div>
          <NavItem label="About Me" targetId="aboutMe"/>
          <NavItem label="Experience" targetId="experience"/>
          <NavItem label="Education" targetId="education"/>
          <NavItem label="Skills" targetId="skills"/>
          <NavItem label="Projects" targetId="projects"/>
          <NavItem label="Beyond Code" targetId="beyond" />
        </div>

        <button class="PrimaryButton">
          <span>Contact Me</span>
        </button>
      </div>

      <img src={jumbotron} className="Jumbotron" alt="Jumbotron" />

      <div className="AboutMe" >
        <h1 id="aboutMe" >About Me</h1>
        <div className="GlassCard">
          <div><img src={vr_photo} alt="Just me wearing a VR headset"/></div>
          <p>Software Engineer with more than 3 years experience in interactive systems, XR development, and data-driven application design. Skilled in JavaScript/TypeScript, React, C#, and Unity, I combine software engineering with a strong sense of creativity and visual design.My work focuses on web and immersive technologies, building intuitive, modular, and engaging applications, systems, and simulations. I’m particularly interested in creating user experiences that merge technical depth with aesthetics, fostering learning, exploration, and innovation across digital environments..</p>
        </div>
      </div>

      
      <div className="cardcontainer">
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App;
