import React from "react";
import "./newLesson.css";
import { LessonCntBody } from "./lessonCntBody/LessonCntBody";
import { NewLessonTitle } from "./newLessonTitle/NewLessonTitle";

export const NewLesson: React.FC = () => {
  return (
    <div className="newLesson">
      <NewLessonTitle title="Նոր դասընթաց" />
      <LessonCntBody />
    </div>
  );
};
