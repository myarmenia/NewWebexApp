import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { IStageLesson } from "../../../../../../../models/interfaces";
import styles from "./lesStgLesson.module.css";

export const LesStgLesson: FC<IStageLesson> = ({ title, lessonNumber }) => {
  const [isActive, setIsActive] = useState(lessonNumber === 1);

  return (
    <div className={styles.lesStgLesson}>
      <p
        className={`text-[10px] font-semibold w-fit ${
          isActive ? styles.activeLes : ""
        }`}
      >
        <Link to={"/feedback"} className="font-normal" state={true}>
          <span className="font-normal">Դաս {lessonNumber}:</span> {title}
        </Link>
      </p>
      <Link to={"homework"} className={styles.homeWorkAncor}>
        Տնային աշխատանք
      </Link>
    </div>
  );
};
