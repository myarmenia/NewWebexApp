import React from "react";
import { Navbar } from "../../../header/navbar/Navbar";
import { UserHeaderStore } from "../UserHeader";
import "./smNavbar.css";

export const SMNavbar: React.FC = () => {
  return <div className="smNavbar">
    <Navbar navbarItems={UserHeaderStore} />
  </div>;
};
