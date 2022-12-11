import React, { FC } from "react";
import "./lesStgLesson.css";
import { IStageLesson } from "../../../../../../../models/interfaces";

export const LesStgLesson: FC<IStageLesson> = ({ title, lessonNumber }) => {
  return (
    <div className="lesStgLesson">
      <p className="text-[10px] font-semibold">
        <span className="font-normal">Դաս {lessonNumber}:</span> {title}
      </p>
      <span className="homeWorkAncor">Տնային աշխատանք</span>
    </div>
  );
};
