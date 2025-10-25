import { Component } from "react";
import './App.css';

function NavItem({ targetId, label, isActive }) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      //window.scrollBy(0, -80); // optional offset if you have a fixed navbar
    }
  };
  
  return(<button className={`NavItem ${isActive ? "active" : ""}`}
  onClick={handleClick} >{label}</button>
  );
}

export default NavItem;