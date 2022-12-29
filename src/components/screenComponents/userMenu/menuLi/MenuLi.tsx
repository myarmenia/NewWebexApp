import React, { useRef } from "react";
import { useLocation, NavLink, NavLinkProps } from "react-router-dom";
import { IteacherMenu } from "../../../../models/interfaces";

interface MenuLiProps extends IteacherMenu {}

export const MenuLi: React.FC<MenuLiProps> = ({
  title,
  img,
  activeImg,
  to,
}) => {
  const { pathname } = useLocation();
  const isPathsEqual = pathname.split("/")[1] === to?.split("/")[0];
  const manuItemRef = useRef(null);
  console.log(manuItemRef.current);

  return (
    <NavLink
      to={to!}
      className={({ isActive }) =>
        isPathsEqual || isActive ? "activeMenuItem menuLi" : "menuLi"
      }
    >
      <div className="menuA" ref={manuItemRef}>
        <img
          src={pathname.includes(to!) || isPathsEqual ? activeImg : img}
          alt=""
        />
        <span className="menuSpan">{title}</span>
      </div>
    </NavLink>
  );
};
