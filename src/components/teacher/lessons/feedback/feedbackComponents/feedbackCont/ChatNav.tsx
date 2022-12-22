import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import chatImg from "../../../../../../images/Teacher/Students/Group 1696.svg";

export const ChatNav: FC = () => {
  const location = useLocation();
  const paramsId = location.pathname.split("/")[5];
  
  return (
    <div className="flex items-center gap-[17px]">
      <NavLink
        to={`lesson/${paramsId}/homework`}
        className={({ isActive }) =>
          isActive ? "border-[#7764FB] border filterBox" : "filterBox"
        }
      >
        Տնայիններ
      </NavLink>
      <NavLink
        to={`lesson/${paramsId}/chat`}
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
