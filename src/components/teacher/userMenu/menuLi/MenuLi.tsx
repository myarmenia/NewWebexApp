import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { IteacherMenu } from "../../../../models/interfaces";

interface MenuLiProps extends IteacherMenu {}

export const MenuLi: React.FC<MenuLiProps> = ({
  title,
  img,
  activeImg,
  to,
}) => {
  const location = useLocation();
  return (
    <NavLink
      to={to!}
      className={({ isActive }) =>
        isActive ? "activeMenuItem menuLi" : "menuLi"
      }
    >
      <div className="menuA">
        <img src={location.pathname.includes(to!) ? activeImg : img} alt="" />
        <span className="menuSpan">{title}</span>
      </div>
    </NavLink>
  );
};
