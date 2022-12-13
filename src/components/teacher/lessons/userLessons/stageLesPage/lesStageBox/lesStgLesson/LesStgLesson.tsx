import React, { FC, useState } from "react";
import "./lesStgLesson.css";
import { IStageLesson } from "../../../../../../../models/interfaces";

export const LesStgLesson: FC<IStageLesson> = ({ title, lessonNumber }) => {
  const [isActive, setIsActive] = useState(lessonNumber === 1);
  return (
    <div className="lesStgLesson">
      <p className={`text-[10px] font-semibold ${isActive ? "activeLes" : ""}`}>
        <span className="font-normal">Դաս {lessonNumber}:</span> {title}
      </p>
      <span className="homeWorkAncor">Տնային աշխատանք</span>
    </div>
  );
};
