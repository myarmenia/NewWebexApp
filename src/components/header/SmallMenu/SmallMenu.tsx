import React from "react";
import { Navbar } from "../navbar/Navbar";
import "./smallMenu.css";

interface SmallMEnuProps {
  animActive: boolean;
}

export const SmallMenu: React.FC<SmallMEnuProps> = ({ animActive }) => {
  return (
    <div id={animActive ? "smMenu" : "smMenuClose"} className="smMenu1">
      <Navbar />
    </div>
  );
};
