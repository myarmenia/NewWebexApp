import React, { FC, useState, MouseEvent } from "react";
import "./stageBox.css";
import plusImg from "../../../../../../images/Teacher/UserLessons/+.svg";
import { StageLesson } from "../stageLesson/StageLesson";
import { IStageLesson } from "../../../../../../models/interfaces";

export interface StageBoxProps {
  stageNumber?: number;
  stageLessons: IStageLesson[];
}

export const StageBox: FC<StageBoxProps> = ({ stageNumber, stageLessons }) => {
  const [isShown, setIsShown] = useState<boolean>(stageNumber === 2);

  const toggleLessons = (e: MouseEvent<HTMLImageElement>) => {
    setIsShown((prev) => !prev);
  };

  return (
    <div className="stageBox">
      <div className="stageBoxHead">
        <span className="stageNumber">Փուլ {stageNumber}</span>
        <img
          src={plusImg}
          alt=""
          onClick={toggleLessons}
          className="cursor-pointer"
        />
      </div>{" "}
      {isShown && (
        <div
          className={`stageLessons ${isShown ? "showLessons" : "hideLessons"}`}
        >
          <hr className="w-full bg-[#CCCCCC] h-[1px]" />
          {stageLessons.map(({ title }, i) => (
            <StageLesson
              {...{ title }}
              lessonNumber={i + 1}
              key={Math.random()}
            />
          ))}
        </div>
      )}
    </div>
  );
};
