import React from "react";
import { INavItemsContent } from "../../../models/interfaces";
import { CustomDropdown } from "../customDropdown/CustomDropdown";
import { NavItem } from "./navItem/NavItem";

interface NavbarProps {
  navbarItems: INavItemsContent[];
}

export const Navbar: React.FC<NavbarProps> = ({ navbarItems }) => {
  return (
    <>
      {navbarItems.map((el, index) => {
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
