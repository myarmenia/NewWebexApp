import React from "react";
import { LessonTitle } from "../../../../components/screenComponents/lessonTitle/LessonTitle";
import "./exam.css";
import { ExamBody } from "./examBody/ExamBody";

export const Exam: React.FC = () => {
  return (
    <div className="exam">
      <LessonTitle title="Նոր դասընթաց" />
      <ExamBody />
    </div>
  );
};
