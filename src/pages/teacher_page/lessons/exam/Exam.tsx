import { FC } from "react";
import { LessonTitle } from "../../../../components/reusable";
import styles from "./exam.module.css";
import { ExamBody } from "./examBody/ExamBody";

export const Exam: FC = () => {
  return (
    <div className={styles.exam}>
      <LessonTitle title="Նոր դասընթաց" />
      <ExamBody />
    </div>
  );
};
