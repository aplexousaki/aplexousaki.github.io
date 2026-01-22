import "./styles/App.css";
import jumbotron from "./assets/jumbotron-blob.png";
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

  const [activeSection, setActiveSection] = useState("null");

  useEffect(() => {
    const NAV_OFFSET = 80; // px — match your navbar height
    const sectionEls = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    const updateActive = () => {
      if (sectionEls.length === 0) return;

      const scrollPos = window.scrollY + NAV_OFFSET + 1; // +1 to avoid equality jitter
      let current = sections[0].id;

      for (const el of sectionEls) {
        if (el.offsetTop <= scrollPos) {
          current = el.id;
        } else {
          break; // because sections are in order top→bottom
        }
      }

      // If we are at (or extremely near) the bottom, force the last section active
      const nearBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (nearBottom) current = sections[sections.length - 1].id;

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    // Run on load and on scroll/resize
    updateActive();
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);


  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <BlobCursor />
      <div className="NavBar">
        <button onClick={handleScrollTop} className="LogoButton"><img className="NavBarLogo" src={logo} alt="logo"></img></button>
        
        <div>
          {sections.map((section) => (
            <NavItem
              key={section.id}
              targetId={section.id}
              label={section.label}
              isActive={activeSection === section.id}
              onClick={() => setActiveSection(section.id)}
            />
          ))}
        </div>

        <button className="PrimaryButton">
          <span>Contact Me</span>
        </button>
      </div>

      <img src={jumbotron} className="Jumbotron" alt="Jumbotron" />

      <div id="aboutMe" className="AboutMe" data-section>
        <h1>About Me</h1>
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

      <div className="Experience" data-section>
        <h1 id="experience">Experience</h1>
      </div>

      <div className="ScrollToTopContainer">
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App;
