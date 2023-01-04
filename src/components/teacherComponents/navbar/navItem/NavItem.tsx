import React from "react";
import { INavItem } from "../../../../models/interfaces";
import "./navItem.css";

export const NavItem: React.FC<INavItem> = ({ children }) => {
  return (
    <a href="#" className="navItem">
      <span className="hoverTextAnimation">{children}</span>
    </a>
  );
};
