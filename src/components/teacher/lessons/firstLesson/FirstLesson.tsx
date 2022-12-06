import React from "react";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import { FirstLesCont } from "./firstLesCont/FirstLesCont";
import "./firstLesson.css";

export const FirstLesson: React.FC = () => {
  return (
    <div className="firstLesson">
      <LessonTitle title="Նոր դասընթաց" />
      <div className="h-[50px]"></div>
      <FirstLesCont />
    </div>
  );
};
