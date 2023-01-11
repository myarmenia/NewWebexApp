import { FC } from "react";
import { LessonTitle } from "../../../../components/reusable";
import "./exam.css";
import { ExamBody } from "./examBody/ExamBody";

export const Exam: FC = () => {
  return (
    <div className="exam">
      <LessonTitle title="Նոր դասընթաց" />
      <ExamBody />
    </div>
  );
};
