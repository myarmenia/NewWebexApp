import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IStageLesson } from "../../../../../../models/interfaces";
import styles from "./lesMessage.module.css";

export const LesMessage: FC<IStageLesson> = ({ title, lessonNumber }) => {
  const { pathname } = useLocation();
  return (
    <div className={styles.lesStgLesson}>
      <NavLink
        to={`lesson/${lessonNumber}/task`}
        className={({ isActive }) =>
          `${styles.lesson_message} ${
            pathname.includes(`${lessonNumber}/chat`) || isActive
              ? styles.activeLes
              : ""
          }`
        }
      >
        <span className="font-normal">Դաս {lessonNumber}:</span> {title}
      </NavLink>

      <NavLink
        to={`lesson/${lessonNumber}/homework`}
        className={({ isActive }) =>
          `${styles.homeWorkAncor} ${isActive ? styles.activeLes : ""}`
        }
      >
        Տնային աշխատանք
      </NavLink>
    </div>
  );
};
