import React from "react";
import { CustomDropdown } from "../customDropdown/CustomDropdown";
import { headerStore } from "../HeaderStore";
import { NavItem } from "../navItem/NavItem";

export const Navbar: React.FC = () => {
  return (
    <>
      {headerStore.map((el, index) => {
        if (typeof el === "object") {
          return el.title === "Աղբյուրներ" ? (
            <NavItem key={index}>
              <CustomDropdown select={el} className="!min-w-[117px]" />
            </NavItem>
          ) : (
            <NavItem key={index}>
              <CustomDropdown select={el} />
            </NavItem>
          );
        } else {
          return <NavItem key={index}>{el}</NavItem>;
        }
      })}
    </>
  );
};
