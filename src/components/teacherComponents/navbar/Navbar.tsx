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
      {navbarItems.map((el, index) =>
        typeof el === "string" ? (
          <NavItem key={index}>{el}</NavItem>
        ) : (
          <CustomDropdown {...el} key={index} />
        )
      )}
    </>
  );
};
