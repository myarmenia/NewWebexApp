import React from "react";
import { CustomSelect } from "../customSelect/CustomSelect";
import { headerStore } from "../HeaderStore";
import { NavItem } from "../navItem/NavItem";

export const Navbar: React.FC = () => {
  return (
    <>
      {headerStore.map((el, index) => {
        if (typeof el === "object") {
          return el.title === "Աղբյուրներ" ? (
            <NavItem key={index}>
              <CustomSelect select={el} className="!min-w-[117px]" />
            </NavItem>
          ) : (
            <NavItem key={index}>
              <CustomSelect select={el} />
            </NavItem>
          );
        } else {
          return <NavItem key={index}>{el}</NavItem>;
        }
      })}
    </>
  );
};
