import React, { FC } from "react";
import styles from "./lesMessage.module.css";
import { IStageLesson } from "../../../../../../models/interfaces";
import { NavLink, useLocation } from "react-router-dom";

export const LesMessage: FC<IStageLesson> = ({ title, lessonNumber }) => {
  const { pathname } = useLocation();
  return (
    <div className={styles.lesStgLesson}>
      <NavLink
        to={`lesson/${lessonNumber}/task`}
        className={({ isActive }) =>
          pathname.includes(`${lessonNumber}/chat`) || isActive
            ? `${styles.activeLes} ${styles.lesson_message}`
            : styles.lesson_message
        }
      >
        <span className="font-normal">Դաս {lessonNumber}:</span> {title}
      </NavLink>

      <NavLink
        to={`lesson/${lessonNumber}/homework`}
        className={({ isActive }) =>
          isActive
            ? `${styles.activeLes} ${styles.homeWorkAncor}`
            : styles.homeWorkAncor
        }
      >
        Տնային աշխատանք
      </NavLink>
    </div>
  );
};
