import React from "react";
import "./newLesson.css";
import { LessonCntBody } from "./lessonCntBody/LessonCntBody";
import { LessonTitle } from "../../lessonTitle/LessonTitle";

export const NewLesson: React.FC = () => {
  return (
    <div className="newLesson">
      <LessonTitle title="Նոր դասընթաց" />
      <LessonCntBody />
    </div>
  );
};
