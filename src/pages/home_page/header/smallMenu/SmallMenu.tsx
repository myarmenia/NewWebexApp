import React from "react";
import "./smallMenu.css";
import { headerStore } from "../HeaderStore";
import { Navbar } from "../../../../components/reusable/navbar/Navbar";

interface SmallMEnuProps {
  animActive: boolean;
}

export const SmallMenu: React.FC<SmallMEnuProps> = ({ animActive }) => {
  return (
    <div id={animActive ? "smMenu" : "smMenuClose"} className="smMenu1">
      {/* <Navbar navbarItems={headerStore} /> */}
    </div>
  );
};
