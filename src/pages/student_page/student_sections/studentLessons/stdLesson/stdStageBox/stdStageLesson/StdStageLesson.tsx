import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IStageLesson } from "../../../../../../../models/interfaces";
import lessonCompletedImg from "../../../../../../../assets/student_images/studentLessons/Group 1756.svg";
import styles from "./stdStageLesson.module.css";

interface StdStageLessonProps extends IStageLesson {
  isLessonCompleted?: boolean;
}

export const StdStageLesson: FC<StdStageLessonProps> = ({
  lessonNumber,
  title,
  isLessonCompleted,
}) => {
  return (
    <div
      className={`${styles.stageLesson} ${
        isLessonCompleted ? "textPurple" : ""
      }`}
    >
      <span className={styles.lessonNumber}>Դաս {lessonNumber}:</span>
      <Link
        to={`lesson/${lessonNumber}`}
        className="overflow-x-hidden flex justify-between gap-3"
      >
        <p
          className={`${styles.student_stageLessonTitle} ${
            isLessonCompleted ? "hover:!opacity-100" : ""
          }`}
        >
          {title}
        </p>
        {isLessonCompleted && (
          <img src={lessonCompletedImg} alt="" className="" />
        )}
      </Link>
    </div>
  );
};
