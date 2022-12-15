import React, { FC, useState } from "react";
import "./mItemsDrop.css";
import { NavLink, useLocation } from "react-router-dom";
import { IteacherMenu } from "../../../../models/interfaces";
import chevDown from "../../../../images/chevDown.svg";
import chevDownPurple from "../../../../images/chevDownPurple.svg";

interface MItemsDropProps extends IteacherMenu {}

export const MItemsDrop: FC<MItemsDropProps> = ({
  toSubPaths,
  activeImg,
  img,
  title,
}) => {
  const location = useLocation();
  const [dropSubMenu, setDropSubMenu] = useState<boolean>(false);
  const thisPathState = toSubPaths?.some(
    (el) => `/${el.path}` === location.pathname
  );
  return (
    <li
      className={`mItemsDrop ${thisPathState ? "activeMenuItem" : ""}`}
      onClick={() => setDropSubMenu((prev) => !prev)}
    >
      <div className="menuA">
        <img src={thisPathState ? activeImg : img} alt="" />
        <p className="menuSpan">{title}</p>
        <img
          src={thisPathState ? chevDownPurple : chevDown}
          alt=""
          className={`w-4 h-3 duration-200 ${dropSubMenu ? "rotate-180" : ""}`}
        />
      </div>
      {dropSubMenu && (
        <div className="sumItems">
          {toSubPaths?.map((el) => (
            <NavLink
              key={Math.random()}
              to={el.path}
              className={({ isActive }) =>
                isActive ? "subMenuSpan textPurple" : "subMenuSpan"
              }
            >
              {el.title}
            </NavLink>
          ))}
        </div>
      )}
    </li>
  );
};
