import React from "react";
import { LessonBox } from "./lessonBox/LessonBox";
import "./stageLessons.css";

interface ILessons {
  title: string;
  id: number;
}

export const StageLessons: React.FC = () => {
  const lessonsArr: ILessons[] = Array.from({ length: 12 }).map((el, ind) => ({
    title: `«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության կարեւորությունն ու արդիականությունը`,
    id: Math.random(),
  }));

  return (
    <div className="stageLessons">
      {lessonsArr.map((el, index) => {
        return <LessonBox {...el} lessonNumber={index + 1} key={el.id} />;
      })}
      <hr className="stageLessonsHr"/>
    </div>
  );
};
