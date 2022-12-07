import React from "react";
import "./exam.css";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import { ExamBody } from "./examBody/ExamBody";

export const Exam: React.FC = () => {
  return (
    <div className="exam">
      <LessonTitle title="Նոր դասընթաց" />
      <ExamBody />
    </div>
  );
};
