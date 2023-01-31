import { FC } from "react";
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
    <div className={styles.mycontainer}>
      <div className={styles.box}>
        <div className={styles.bg} />
        <span className={styles.item}>
          <span className="text-lg">{stageCount}</span> Փուլ
        </span>
        <hr className={styles.hr} />
        <span className={styles.item}>
          <span className="text-lg">{stageLessons} </span>
          դաս (ընդհանուր {stageLessons * stageCount})
        </span>
        <hr className={styles.hr} />
        <span className={styles.item}>
          <span className="text-lg">{lessonTime} </span>
          ժամ դասի տևողությունը
        </span>
      </div>
    </div>
  );
};
