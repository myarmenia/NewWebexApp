import { FC } from "react";
import "./newLesson.css";
import { LessonTitle } from "../../../../components/reusable";
import { LessonCntBody } from "./lessonCntBody/LessonCntBody";

export const NewLesson: FC = () => {
  return (
    <div className="newLesson">
      <LessonTitle title="Նոր դասընթաց" />
      <LessonCntBody />
    </div>
  );
};
