import React, { FC } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import chatImg from "../../../../../../images/Teacher/Students/Group 1696.svg";
import { IOtherLessonLoaderData } from "../../../../../../models/interfaces";

export const ChatNav: FC = () => {
  const { data, paramsId = 1 } = useLoaderData() as IOtherLessonLoaderData;
  console.log(paramsId);

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
