import { FC } from "react";
import styles from "./firstLesson.module.css";
import { LessonTitle } from "../../../../components/reusable";
import { IPaginationItem } from "../../../../models/interfaces";
import { FirstLesCont } from "./firstLesCont/FirstLesCont";
import { Pagination } from "./pagination/Pagination";
import { generateArray } from "../../../../helper";

const paginationItems: (count: number) => IPaginationItem[] = (count) =>
  Array.from({
    length: count,
  }).map(
    (_, ind) =>
      ind === 0
        ? { id: Math.random(), isActive: false, isCompleted: true }
        : ind === 1
        ? { id: Math.random(), isActive: true, isCompleted: false }
        : { id: Math.random(), isActive: false, isCompleted: false }
    // ({ id: Math.random(), isActive: false, isCompleted: false })
  );

export const FirstLesson: FC = () => {
  return (
    <div className={styles.mycontainer}>
      <LessonTitle title="Նոր դասընթաց" />
      <Pagination currentitems={paginationItems(15)} />
      <FirstLesCont />
    </div>
  );
};
