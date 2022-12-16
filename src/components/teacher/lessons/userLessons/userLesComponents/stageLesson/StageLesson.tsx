import React, { FC } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  ILessonLoaderData,
  IStageLesson,
} from "../../../../../../models/interfaces";
import "./stageLesson.css";

export const StageLesson: FC<IStageLesson> = ({ lessonNumber, title }) => {
  const to = useLoaderData() as ILessonLoaderData;

  return (
    <div className="stageLesson textPurple">
      <span className="lessonNumber">Դաս {lessonNumber}:</span>
      <Link to={"../stage-lesson"}>
        <p className="lessonTitle">{title}</p>
      </Link>
    </div>
  );
};
