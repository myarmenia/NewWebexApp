import React, { FC } from "react";
import "./lesCases.css";
import "../../userLesComponents/lesBox/lesBox.css";
import { LesPageProps } from "../LesPage";
import { LessonProps } from "../../../../../../models/interfaces";

interface LesCasesProps extends LessonProps {}

export const LesCases: FC<LesCasesProps> = ({
  studentsCount,
  price,
  keys,
  description,
}) => {
  return (
    <div className="lesCases">
      <span className="studentsCount">{studentsCount} ուսանող</span>
      <div className="flex justify-between items-center">
        <p className="lesBox_price !text-[36px]">{price} դրամ</p>
        <span className="text-[32px]">6 &#9734;</span>
      </div>
      <div className="keys">
        {keys.map((key, index) => (
          <div className="key" key={index}>
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
