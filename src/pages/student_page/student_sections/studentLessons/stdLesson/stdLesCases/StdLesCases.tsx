import React, { FC } from "react";
import "./stdLesCases.css";

import starImg from "../../../../../../assets/teacher_images/userLessons/starImg.svg";

import { LesPageProps } from "../StdLesPage";
import { LessonProps } from "../../../../../../models/interfaces";

interface StdLesCasesProps extends LessonProps {}

export const StdLesCases: FC<StdLesCasesProps> = ({
  studentsCount,
  price,
  keys,
  description,
}) => {
  return (
    <div className="lesCases">
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
      <p className="lesBox_description !leading-[22px] !text-sm">
        {description}
      </p>
      <div className="stdLesPage_progress_bar">
        <div className="stdLesPage_progress"/>
        <span className="stdLesPage_progress_percent">70%</span>
      </div>
    </div>
  );
};
