import React from "react";
import { IPaginationItem } from "../../../../models/interfaces";
import { LessonTitle } from "../../lessonTitle/LessonTitle";
import { FirstLesCont } from "./firstLesCont/FirstLesCont";
import "./firstLesson.css";
import { Pagination } from "./pagination/Pagination";

export const FirstLesson: React.FC = () => {
  const paginationItems: IPaginationItem[] = Array.from({ length: 12 }).map(
    (el, ind) =>
      ind === 0
        ? { id: Math.random(), isActive: false, isCompleted: true }
        : ind === 1
        ? { id: Math.random(), isActive: true, isCompleted: false }
        : { id: Math.random(), isActive: false, isCompleted: false }
    // ({ id: Math.random(), isActive: false, isCompleted: false })
  );

  return (
    <div className="firstLesson">
      <LessonTitle title="Նոր դասընթաց" />
      <Pagination currentitems={paginationItems} />
      <FirstLesCont />
    </div>
  );
};
