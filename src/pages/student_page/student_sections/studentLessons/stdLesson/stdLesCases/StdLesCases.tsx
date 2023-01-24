import { FC } from "react";
import styles from "./stdLesCases.module.css";
import { ProgressBar } from "../../../../../../components/reusable/ProgressBar";
import { LessonProps } from "../../../../../../models/interfaces";

interface StdLesCasesProps extends LessonProps {}

export const StdLesCases: FC<StdLesCasesProps> = ({
  studentsCount,
  price,
  keys,
  description,
}) => {
  return (
    <div className={styles.lesCases}>
      {/* <span className="studentsCount">{studentsCount} ուսանող</span>
      <div className="flex justify-between items-center">
        <p className="lesBox_price !text-[36px]">{price} դրամ</p>
        <span className="text-[32px] text-gray flex items-center gap-1">
          6 <img src={starImg} className="w-7 h-7 shrink-0" alt="" />
        </span>
      </div>
      <div className="keys">
        {keys.map((key, index) => (
          <div className="key" key={index}>
            {key}
          </div>
        ))}
      </div> */}
      <p
        className="!leading-[22px] !text-sm"
        //  className="lesBox_description !leading-[22px] !text-sm"
      >
        {description}
      </p>
      <ProgressBar progress={70} className="!h-6 !text-2xl" />
    </div>
  );
};
