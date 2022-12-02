import React from "react";
import { LessonCntBody } from "./lessonCntBody/LessonCntBody";
import "./newLesson.css";
import { NewLessonTitle } from "./newLessonTitle/NewLessonTitle";

export const NewLesson: React.FC = () => {
  return (
    <div className="newLesson">
      <NewLessonTitle title="Նոր դասընթաց" />
      <LessonCntBody />
    </div>
  );
};
