import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import chatImg from "../../../../../../images/Teacher/Students/Group 1696.svg";

export const ChatNav: FC = () => {
  return (
    <div className="flex items-center gap-[17px]">
      <NavLink
        to={"homework"}
        className={({ isActive }) =>
          isActive ? "border-[#7764FB] border filterBox" : "filterBox"
        }
      >
        Տնայիններ
      </NavLink>
      <NavLink
        to={"chat"}
        className={({ isActive }) =>
          isActive
            ? "border-[#7764FB] border filterBox flex gap-2"
            : "filterBox flex gap-2"
        }
      >
        <span>Չատ</span>
        <img src={chatImg} alt="" />
      </NavLink>
    </div>
  );
};
