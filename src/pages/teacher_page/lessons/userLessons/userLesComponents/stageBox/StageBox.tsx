import React, { FC, useState, MouseEvent } from "react";
import "./stageBox.css";
import plusImg from "../../../../../../assets/teacher_images/userLessons/plusImg.svg";
import minusImg from "../../../../../../assets/teacher_images/userLessons/minusImg.svg";
import { StageLesson } from "../stageLesson/StageLesson";
import {
  ILessonLoaderData,
  IStageLesson,
} from "../../../../../../models/interfaces";
import { useLoaderData } from "react-router";

export interface StageBoxProps {
  stageNumber?: number;
  stageLessons: IStageLesson[];
}

export const StageBox: FC<StageBoxProps> = ({ stageNumber, stageLessons }) => {
  const { lessonsObj } = useLoaderData() as ILessonLoaderData;

  // const { lessonsArr } = useSelector(lessonsSelectorFN);

  const [isShown, setIsShown] = useState<boolean>(stageNumber === 2);
  const toggleLessons = (e: MouseEvent<HTMLImageElement>) => {
    setIsShown((prev) => !prev);
  };
  const animLessons = isShown
    ? {
        height: `${lessonsObj.length * 43 + 21}px`,
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
        {lessonsObj.map(({ title, body, id }, i) => (
          <StageLesson title={body} lessonNumber={id} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};
