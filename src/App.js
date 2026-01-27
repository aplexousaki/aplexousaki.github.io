import "./styles/App.css";
import jumbotron from "./assets/jumbotron-black (1).png";
import logo from "./assets/logo.png";
import mailIcon from "./assets/email.png";
import NavItem from "./NavItem";
import vr_photo from "./assets/vr_photo.png";
import React, { useState, useRef, useEffect } from "react";
import ScrollToTopButton from "./ScrollToTop";
import BlobCursor from "./BlobCursor";
import ExperienceList from "./ExperienceList";
import EducationSection from "./Education";
import downloadIcon from "./assets/download.png";
import linkedinIcon from "./assets/linkedin.png";
import googleScholarIcon from "./assets/Google_Scholar_logo.svg.png";

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
    const NAV_OFFSET = 200; // px — match your navbar height
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <BlobCursor />
      <div className="NavBar">
        <button onClick={handleScrollTop} className="LogoButton">
          <img className="NavBarLogo" src={logo} alt="logo"></img>
        </button>

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
          <span>Contact</span>
          <img src={mailIcon} />
        </button>
      </div>

      <img src={jumbotron} className="Jumbotron" alt="Jumbotron" />

      <div id="aboutMe" className="AboutMe" data-section>
        <h1>About Me</h1>
        <div className="GlassCard">
          <div id="profile-pic">
            <img src={vr_photo} alt="Just me wearing a VR headset" />
          </div>
          <div className="AboutMeContent">
            <h3>
              Hi, I’m Alexandra Plexousaki, an MSc Software Engineer from Greece
              with a strong interest in <span>Extended Reality (XR)</span>,{" "}
              <span>Frontend engineering</span> and <span>UI/UX design</span>.
            </h3>
            <p>
              I enjoy working on interactive systems that combine technical
              depth with creative interface designs, aiming to create
              experiences that are intuitive, modular, and visually clear. I am
              particularly drawn to projects that explore how people interact
              with technology beyond traditional screens, and how design
              decisions shape usability in all kinds of digital environments.
            </p>
            <p>
              Outside of development, I am always chasing creativity, with an
              interest in visual design and enjoy exploring new tools and
              interaction paradigms.
            </p>
            <ul>
              <li>
                <a href="/Alexandra_Plexousaki_CV.pdf" download>
                  {/* <img src={downloadIcon} alt="Download CV" /> */}
                  Download CV
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexandra-plexousaki/" >
                  {/* <img src={linkedinIcon} alt="LinkedIn" /> */}
                  LinkedIn
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://scholar.google.com/citations?user=_Tx-XfUAAAAJ&hl=en">
                  {/* <img src={googleScholarIcon} alt="Google Scholar" /> */}
                  Google Scholar
                </a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </div>

      <div id="experience" className="Section" data-section>
        <h1>Experience</h1>
        <ExperienceList />
      </div>

      <div id="education" className="Section" data-section>
        <h1>Education</h1>
        <EducationSection />
      </div>

      <div id="skills" className="Section" data-section>
        <h1>Skills</h1>
      </div>

      <div className="ScrollToTopContainer">
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App;
