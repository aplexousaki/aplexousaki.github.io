import { Component } from "react";
import "./styles/Experience.css";
import rectangle from "./assets/Rectangle.png";
function ExperienceItem({
  title,
  company,
  location,
  startDate,
  endDate,
  responsibilities,
}) {
  const isActive = endDate === "Present";
  return (
    <div className={`ExperienceItem ${isActive ? "active" : ""}`}>
      <div className="header">
        <div>
          <h3>{title}</h3>
          <h3 style={{ fontWeight: 400 }}>{company}</h3>
        </div>

        <h4 style={{ fontWeight: 400 }}>
          {startDate} – {endDate}
        </h4>
       
      </div>

<div className="bottom-section">
  <ul>
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <img src={rectangle} alt="" / >
</div>
      
    </div>
  );
}

export default ExperienceItem;
