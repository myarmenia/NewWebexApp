import React, { FC } from "react";
import "./lesMessage.css";
import { IStageLesson } from "../../../../../../models/interfaces";
import { NavLink } from "react-router-dom";

export const LesMessage: FC<IStageLesson> = ({ title, lessonNumber }) => {
  return (
    <div className="lesStgLesson">
      <NavLink
        to={`lesson/${lessonNumber}/task`}
        className={({ isActive }) =>
          isActive ? "activeLes lesson_message" : "lesson_message"
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
