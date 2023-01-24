import React, { FC } from "react";
import styles from "./lesImageBox.module.css";
interface LesImageBoxProps {
  stageCount: number;
  stageLessons: number;
  lessonTime: number;
}

export const LesImageBox: FC<LesImageBoxProps> = ({
  stageCount,
  stageLessons,
  lessonTime,
}) => {
  return (
    <div className={styles.imageBox}>
      <div className={styles.lesInfoBox}>
        <div className={styles.lesInfoBox_bg} />
        <span className={styles.lesInfoItem}>
          <span className="text-lg">{stageCount}</span> Փուլ
        </span>
        <hr className={styles.imageBox_hr} />
        <span className={styles.lesInfoItem}>
          <span className="text-lg">{stageLessons} </span>
          դաս (ընդհանուր {stageLessons * stageCount})
        </span>
        <hr className={styles.imageBox_hr} />
        <span className={styles.lesInfoItem}>
          <span className="text-lg">{lessonTime} </span>
          ժամ դասի տևողությունը
        </span>
      </div>
    </div>
  );
};
