import React from "react";
import { INavItemsContent } from "../../../models/interfaces";
import { CustomDropdown } from "../../reusable/customDropdown/CustomDropdown";
import { NavItem } from "./navItem/NavItem";

interface NavbarProps {
  navbarItems: INavItemsContent[];
}

export const Navbar: React.FC<NavbarProps> = ({ navbarItems }) => {
  return (
    <>
      {navbarItems.map((el, index) => {
        return "dropDownTitle" in el ? (
          <CustomDropdown {...el} key={index} />
        ) : (
          <NavItem {...el} key={index}></NavItem>
        );
      })}
    </>
  );
};

// return el.hasOwnProperty("dropDownTitle") ? (
//   <CustomDropdown
//     dropDownTitle=" "
//     options={[{ title: "", path: "" }]}
//     key={index}
//   />
// ) : (
//   <NavItem title="" path="" key={index}></NavItem>
// );
