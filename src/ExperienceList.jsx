import ExperienceItem from "./ExperienceItem";
import data from "./experience.json";
import "./styles/Experience.css";

function ExperienceList() {
  return (
    <div className="ExperienceList">
      {data.experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          title={exp.title}
          company={exp.company}
          location={exp.location}
          startDate={exp.startDate}
          endDate={exp.endDate}
          responsibilities={exp.responsibilities}
        />
      ))}
    </div>
  );
}

export default ExperienceList;
