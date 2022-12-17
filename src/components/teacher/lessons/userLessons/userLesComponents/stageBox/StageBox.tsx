import React, { FC, useState, MouseEvent } from "react";
import "./stageBox.css";
import plusImg from "../../../../../../images/Teacher/UserLessons/plusImg.svg";
import minusImg from "../../../../../../images/Teacher/UserLessons/minusImg.svg";
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
  const animLessons = isShown
    ? {
        height: `${stageLessons.length * 43 + 21}px`,
      }
    : { height: "0" };

  return (
    <div className="stageBox">
      <div className="stageBoxHead">
        <span className="stageNumber">Փուլ {stageNumber}</span>
        <img
          src={isShown ? minusImg : plusImg}
          alt=""
          onClick={toggleLessons}
          className="cursor-pointer h-5 w-5"
        />
      </div>
      <div className="stageLessons" style={animLessons}>
        <hr className="w-full bg-[#CCCCCC] h-[1px] mt-5" />
        {stageLessons.map(({ title }, i) => (
          <StageLesson
            {...{ title }}
            lessonNumber={i + 1}
            key={Math.random()}
          />
        ))}
      </div>
    </div>
  );
};
