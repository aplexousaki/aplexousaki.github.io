import ExperienceItem from "./ExperienceItem";
import data from "./experience.json";
import "./styles/Education.css";
import uoc_logo from "./assets/UoC_logo.png";
function EducationSection() {
  return (
    <div className="EducationSection">
      <div className="EducationItem">
        <div className="topSection">
          <img src={uoc_logo} alt="" width="220px" height="220px" />
          <div>
            <p style={{ fontWeight: 700, fontSize: "1.5rem" }}>
              Bachelor of Science - BS
            </p>
            <p style={{ fontWeight: 700, fontSize: "1.5rem" }}>
              Computer Science
            </p>
            <p style={{ fontWeight: 600, fontSize: "1.4rem" }}>
              University of Crete
            </p>
            <p style={{ fontWeight: 600, fontSize: "1.4rem" }}>
              Department of Computer Science
            </p>
            <p style={{ fontWeight: 500, fontSize: "1.3rem" }}>2018 - 2022</p>
          </div>
        </div>
        <p style={{ fontWeight: 500, width: "80%", fontSize: "1.3rem" }}>
          Thesis:{" "}
          <span style={{ fontStyle: "italic" }}>
            “Vesti-AmI: The Intelligent Wardrobe”
          </span>{" "}
          — iOS app in React Native for accessible outfit recommendations.{" "}
        </p>
      </div>
      <div className="EducationItem">
        <div className="topSection">
          <img src={uoc_logo} alt="" width="220px" height="220px" />
          <div>
            <p style={{ fontWeight: 700, fontSize: "1.5rem" }}>
              Master of Science - MS
            </p>
            <p style={{ fontWeight: 700, fontSize: "1.5rem" }}>
              Computer Science & Engineering
            </p>
            <p style={{ fontWeight: 600, fontSize: "1.4rem" }}>
              University of Crete
            </p>
            <p style={{ fontWeight: 600, fontSize: "1.4rem" }}>
              Department of Computer Science
            </p>
            <p style={{ fontWeight: 500, fontSize: "1.3rem" }}>2022 - 2025</p>
          </div>
        </div>
         {/* <p style={{ fontWeight: 400, width: "80%", fontSize: "1.3rem" }}>
          
         Technical focus: Computer graphics, human-computer interaction and Cloud Computing 
        </p> */}
        <p style={{ fontWeight: 500, width: "80%", fontSize: "1.3rem" }}>
          Thesis:{" "}
          <span style={{ fontStyle: "italic" }}>
            “XRSynthesizer: Context-Driven Assembly of XR Widgets in
            Real Time”:
          </span>{" "}
          Designed and developed a modular XR framework enabling real-time,
          cloud-driven integration of interactive 3D UI components across XR
          applications.{" "}
        </p>
      </div>
    </div>
  );
}

export default EducationSection;
