import React from "react";
import { INavItem } from "../../../models/interfaces";
import "./NavItem.css";

export const NavItem: React.FC<INavItem> = ({ children }) => {
  return (
    <a href="#" className="navItem">
      {children}
    </a>
  );
};
