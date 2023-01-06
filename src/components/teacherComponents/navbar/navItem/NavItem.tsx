import React from "react";
import { NavLink } from "react-router-dom";
import "./navItem.css";

interface NavItemProps {
  title: string;
  path?: string;
}

export const NavItem: React.FC<NavItemProps> = ({ path, title }) => {
  return (
    <NavLink to={path!} className="navItem">
      <span className="hoverTextAnimation">{title}</span>
    </NavLink>
  );
};
