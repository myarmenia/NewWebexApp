import React, { FC } from "react";
import "./lesMessage.css";
import { IStageLesson } from "../../../../../../models/interfaces";
import { NavLink, useLocation } from "react-router-dom";

export const LesMessage: FC<IStageLesson> = ({ title, lessonNumber }) => {
  const { pathname,  } = useLocation();
  return (
    <div className="lesStgLesson">
      <NavLink
        to={`lesson/${lessonNumber}/task`}
        className={({ isActive }) =>
          pathname.includes(`${lessonNumber}/chat`) || isActive
            ? "activeLes lesson_message"
            : "lesson_message"
        }
      >
        <span className="font-normal">Դաս {lessonNumber}:</span> {title}
      </NavLink>

      <NavLink
        to={`lesson/${lessonNumber}/homework`}
        className={({ isActive }) =>
          isActive ? "activeLes homeWorkAncor" : "homeWorkAncor"
        }
      >
        Տնային աշխատանք
      </NavLink>
    </div>
  );
};
