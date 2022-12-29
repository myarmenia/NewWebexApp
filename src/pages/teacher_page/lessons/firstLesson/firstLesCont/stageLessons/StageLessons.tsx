import React from "react";
import { LessonBox } from "./lessonBox/LessonBox";
import "./stageLessons.css";

interface ILessons {
  title: string;
  id: number;
}

export const StageLessons: React.FC = () => {
  const lessonsCount = 12;
  const lessonsArr: ILessons[] = Array.from({ length: lessonsCount }).map(
    (el, ind) => ({
      title: `«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության կարեւորությունն ու արդիականությունը`,
      id: Math.random(),
    })
  );

  return (
    <div
      className="stageLessons"
      //   style={{ height: 85 * Math.round(lessonsCount / 2) + "px" }}
    >
      {lessonsArr.map((el, index) => {
        return <LessonBox {...el} lessonNumber={index + 1} key={el.id} />;
      })}
      <hr className="stageLessonsHr" />
    </div>
  );
};
