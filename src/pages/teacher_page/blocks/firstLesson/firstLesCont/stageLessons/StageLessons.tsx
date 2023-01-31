import { FC } from "react";
import { generateArray } from "../../../../../../helper";
import { LessonBox } from "./lessonBox/LessonBox";
import styles from "./stageLessons.module.css";

interface ILessons {
  title: string;
  id: number;
}
const lessonsArr = generateArray<ILessons>(12, {
  title: `«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության կարեւորությունն ու արդիականությունը`,
  id: Math.random(),
});
export const StageLessons: FC = () => {
  return (
    <div
      className={styles.mycontainer}
      //   style={{ height: 85 * Math.round(lessonsCount / 2) + "px" }}
    >
      {lessonsArr.map((el, index) => {
        return <LessonBox {...el} lessonNumber={index + 1} key={el.id} />;
      })}
      <hr className={styles.hr} />
    </div>
  );
};
