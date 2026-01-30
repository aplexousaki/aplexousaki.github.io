import "../Styles/Education.css";
function EducationSection() {
  return (
    <div className="EducationSection">
      <div className="EducationItem">
        <div className="topSection">
          <img src="/assets/UoC_logo.png" alt="" width="160px" height="160px" />
          <div>
            <p>Master of Science - MS</p>
            <p>Computer Science & Engineering</p>
            <p>University of Crete</p>
            <p>Department of Computer Science</p>
            <p>2022 - 2025</p>
          </div>
        </div>
        {/* <p style={{ fontWeight: 400, width: "80%", fontSize: "1.3rem" }}>
          
         Technical focus: Computer graphics, human-computer interaction and Cloud Computing 
        </p> */}
        <p style={{ fontWeight: 500, width: "85%", height: "50px" }}>
          Thesis:{" "}
          <span style={{ fontStyle: "italic" }}>
            “XRSynthesizer: Context-Driven Assembly of XR Widgets in Real Time”:
          </span>{" "}
          Designed and developed a modular XR framework enabling real-time,
          cloud-driven integration of interactive 3D UI components across XR
          applications.{" "}
        </p>
        {/* <a href="#xrsynthesizer">
          Read More
        </a> */}
      </div>
      <div className="EducationItem">
        <div className="topSection">
          <img src="/assets/UoC_logo.png" alt="" width="160px" height="160px" />
          <div>
            <p>Bachelor of Science - BS</p>
            <p>Computer Science</p>
            <p>University of Crete</p>
            <p>Department of Computer Science</p>
            <p>2018 - 2022</p>
          </div>
        </div>
        <p style={{ fontWeight: 500, width: "85%", height: "50px"}}>
          Thesis:{" "}
          <span style={{ fontStyle: "italic" }}>
            “Vesti-AmI: The Intelligent Wardrobe”
          </span>{" "}
          — iOS app in React Native for accessible outfit recommendations.{" "}
        </p>
        {/* <a href="#vestiami">
          Read More
        </a> */}
      </div>
      
    </div>
  );
}

export default EducationSection;
