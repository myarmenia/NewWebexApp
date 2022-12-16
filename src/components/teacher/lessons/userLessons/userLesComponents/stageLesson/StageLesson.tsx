import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IStageLesson } from "../../../../../../models/interfaces";
import "./stageLesson.css";

export const StageLesson: FC<IStageLesson> = ({ lessonNumber, title }) => {
  return (
    // <Link to={}>
    <div className="stageLesson textPurple">
      <span className="lessonNumber">Դաս {lessonNumber}:</span>
      <p className="lessonTitle">{title}</p>
    </div>
    // </Link>
  );
};
