import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IteacherMenu } from "../../../models/interfaces";

interface MenuLiProps extends IteacherMenu {}

export const MenuLi: React.FC<MenuLiProps> = ({
  title,
  img,
  activeImg,
  to,
}) => {
  const { pathname } = useLocation();
  const isPathsEqual = pathname.includes(to?.split("/")[0]!);
  return (
    <NavLink
      to={to!}
      className={({ isActive }) =>
        isPathsEqual || isActive
          ? "activeMenuItem menuLi"
          : "menuLi hoverTextAnimation"
      }
    >
      <div className="menuA">
        <img
          src={pathname.includes(to!) || isPathsEqual ? activeImg : img}
          alt=""
        />
        <span className="menuSpan">{title}</span>
      </div>
    </NavLink>
  );
};
