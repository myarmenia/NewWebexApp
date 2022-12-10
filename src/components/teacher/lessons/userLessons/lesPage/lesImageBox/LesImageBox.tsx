import React, { FC } from "react";
import "./lesImageBox.css";
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
    <div className="imageBox">
      <div className="lesInfoBox">
        <div className="lesInfoBox_bg" />
        <span className="lesInfoItem">
          <span className="text-lg">{stageCount}</span> Փուլ
        </span>
        <hr className="bg-white h-5 w-[1px]" />
        <span className="lesInfoItem">
          <span className="text-lg">{stageLessons} </span>
          դաս (ընդհանուր {stageLessons * stageCount})
        </span>
        <hr className="bg-white h-5 w-[1px]" />
        <span className="lesInfoItem">
          <span className="text-lg">{lessonTime} </span>
          ժամ դասի տևողությունը
        </span>
      </div>
    </div>
  );
};
