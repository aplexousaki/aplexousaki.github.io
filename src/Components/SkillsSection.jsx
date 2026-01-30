import "../Styles/Skills.css";
import data from "../Data/skills.json";
import SkillItem from "./SkillItem";

function SkillsSection() {
  return (
    <div className="SkillSection">
      {data.skills.map((skillCategory, index) => (
        <div key={index} className="SkillCategory">
          <h3>{skillCategory.category}</h3>
          <div className="SkillsList">
            {skillCategory.skill.map((skill, skillIndex) => (
              <SkillItem key={skillIndex} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsSection;
