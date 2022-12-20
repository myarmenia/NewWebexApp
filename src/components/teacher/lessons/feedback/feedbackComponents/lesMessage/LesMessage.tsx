import React, { FC, useState } from "react";
import "./lesMessage.css";
import {
  IOtherLessonLoaderData,
  IStageLesson,
} from "../../../../../../models/interfaces";
import { Link, NavLink, useLoaderData } from "react-router-dom";

export const LesMessage: FC<IStageLesson> = ({ title, lessonNumber }) => {
  const { paramsId } = useLoaderData() as IOtherLessonLoaderData;
  console.log();

  return (
    <div className="lesStgLesson">
      <NavLink
        to={`lesson/${lessonNumber}`}
        className={({ isActive }) =>
          isActive ? "activeLes lesson_message" : "lesson_message"
        }
        state={true}
      >
        <span className="font-normal">Դաս {lessonNumber}:</span> {title}
      </NavLink>

      <Link to={`lesson/${lessonNumber}/homework`} className="homeWorkAncor">
        Տնային աշխատանք
      </Link>
    </div>
  );
};
