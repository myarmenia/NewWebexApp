import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IStageLesson } from "../../../../../../models/interfaces";
import styles from "./stageLesson.module.css";

export const StageLesson: FC<IStageLesson> = ({ lessonNumber, title }) => {
  return (
    <div className={styles.box + " textPurple"}>
      <span className={styles.number}>Դաս {lessonNumber}:</span>
      <Link to={`lesson/${lessonNumber}`} className="overflow-x-hidden">
        <p className={styles.title + " textPurple"}>{title}</p>
      </Link>
    </div>
  );
};
