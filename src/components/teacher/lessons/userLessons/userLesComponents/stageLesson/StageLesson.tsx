import React, { FC } from "react";
import { IStageLesson } from "../../../../../../models/interfaces";
import "./stageLesson.css";

export const StageLesson: FC<IStageLesson> = ({ lessonNumber, title }) => {
  return (
    <div className="stageLesson textPurple">
      <span className="lessonNumber">Դաս {lessonNumber}:</span>
      <p className="lessonTitle">{title}</p>
    </div>
  );
};
