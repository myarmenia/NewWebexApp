import React, { FC } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  ILessonLoaderData,
  IStageLesson,
} from "../../../../../../models/interfaces";
import "./stageLesson.css";

export const StageLesson: FC<IStageLesson> = ({ lessonNumber, title }) => {
  return (
    <div className="stageLesson textPurple">
      <span className="lessonNumber">Դաս {lessonNumber}:</span>
      <Link to={`lesson/${lessonNumber}`} className="overflow-x-hidden">
        <p className="lessonTitle">{title}</p>
      </Link>
    </div>
  );
};
