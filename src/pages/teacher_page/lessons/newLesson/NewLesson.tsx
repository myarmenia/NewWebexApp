import { FC } from "react";
import styles from "./newLesson.module.css";
import { LessonTitle } from "../../../../components/reusable";
import { LessonCntBody } from "./lessonCntBody/LessonCntBody";

export const NewLesson: FC = () => {
  return (
    <div className={styles.mycontainer}>
      <LessonTitle title="Նոր դասընթաց" />
      <LessonCntBody />
    </div>
  );
};
