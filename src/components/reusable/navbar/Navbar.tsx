import { FC } from "react";
import { INavItemsContent } from "../../../models/interfaces";
import { CustomDropdown } from "../index";
import { NavItem } from "./navItem/NavItem";

interface NavbarProps {
  navbarItems: INavItemsContent[];
}

export const Navbar: FC<NavbarProps> = ({ navbarItems }) => {
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
