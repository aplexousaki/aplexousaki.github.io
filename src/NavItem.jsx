import { Component } from "react";
import './App.css';

function NavItem({ targetId, label}) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return(<button className="NavItem" onClick={handleClick} >{label}</button>
  );
}

export default NavItem;