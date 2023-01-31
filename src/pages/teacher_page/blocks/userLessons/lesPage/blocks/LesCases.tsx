import { FC } from "react";
import starImg from "../../../../../../assets/teacher_images/userLessons/starImg.svg";
import { LessonProps } from "../../../../../../models/interfaces";
import styles from "../lesPage.module.css";

interface LesCasesProps extends LessonProps {}

export const LesCases: FC<LesCasesProps> = ({
  studentsCount,
  price,
  keys,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <span className="studentsCount">{studentsCount} ուսանող</span>
      <div className="flex justify-between items-center">
        <p className="lesBox_price !text-[36px]">{price} դրամ</p>
        <span className="text-[32px] text-gray flex items-center gap-1">
          6 <img src={starImg} className="w-7 h-7 shrink-0" alt="" />
        </span>
      </div>
      <div className={styles.keys}>
        {keys.map((key, index) => (
          <div className={styles.key} key={index}>
            {key}
          </div>
        ))}
      </div>
      <p className="lesBox_description !leading-[22px] !text-sm">
        {description}
      </p>
    </div>
  );
};
