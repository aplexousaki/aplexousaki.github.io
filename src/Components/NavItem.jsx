import "../Styles/App.css";

function NavItem({ targetId, label, isActive, onClick }) {
  const handleClick = () => {
    const target = document.getElementById(targetId); 
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (onClick) onClick();
  };

  return (
    <button
      className={`NavItem ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default NavItem;
