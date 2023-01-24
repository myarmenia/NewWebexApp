import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IStageLesson } from "../../../../../../../models/interfaces";
import styles from "./stageLesson.module.css";

export const StageLesson: FC<IStageLesson> = ({ lessonNumber, title }) => {
  return (
    <div className={`${styles.stageLesson} ${styles.textPurple}`}>
      <span className="text-base whitespace-nowrap">Դաս {lessonNumber}:</span>
      <Link to={`lesson/${lessonNumber}`} className="overflow-x-hidden">
        <p className={`${styles.stageLessonTitle} ${styles.textPurple}`}>
          {title}
        </p>
      </Link>
    </div>
  );
};
