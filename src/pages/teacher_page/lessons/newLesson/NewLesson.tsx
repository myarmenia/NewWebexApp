import React from "react";
import "./newLesson.css";
import { LessonCntBody } from "./lessonCntBody/LessonCntBody";
import { LessonTitle } from "../../../../components/reusable";

export const NewLesson: React.FC = () => {
  return (
    <div className="newLesson">
      <LessonTitle title="Նոր դասընթաց" />
      <LessonCntBody />
    </div>
  );
};
