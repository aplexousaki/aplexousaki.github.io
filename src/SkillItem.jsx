import "./styles/Skills.css";
function SkillItem({
  name,
  icon
}) {
  return (
    <div className="SkillItem">
      <img src={`/assets${icon}`} alt={`${name}`} className="SkillIcon" />
      <span>{name}</span>
    </div>
  );
}

export default SkillItem;