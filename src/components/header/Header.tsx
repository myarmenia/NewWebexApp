import React from "react";
import "./header.css";
import { CustomSelect } from "./CustomSelect/CustomSelect";
import { headerStore } from "./HeaderStore";
import { NavItem } from "./navItem/NavItem";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="headerCotainer">
        <div className="LogoDiv">
          logo
          {/* <img src="" alt="" className=""/> */}
        </div>
        <div className="navbar">
          {headerStore.map((el, index) => {
            if (typeof el !== "string") {
              return (
                <NavItem key={index}>
                  <CustomSelect select={el} />
                </NavItem>
              );
            } else {
              return <NavItem key={index}>{el}</NavItem>;
            }
          })}
        </div>
      </div>
    </div>
  );
};
