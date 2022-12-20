import React, { FC, Fragment, useState } from "react";
import "./lesStageBox.css";
import plusImg from "../../../../../../images/Teacher/UserLessons/plusImg.svg";
import minusImg from "../../../../../../images/Teacher/UserLessons/minusImg.svg";
import { IStageLesson } from "../../../../../../models/interfaces";
import { LesStgLesson } from "./lesStgLesson/LesStgLesson";

interface LesStageBoxProps {
  stageNumber: number;
  stageLessons: IStageLesson[];
}

export const LesStageBox: FC<LesStageBoxProps> = ({
  stageNumber,
  stageLessons,
}) => {
  const [isShown, setIsShown] = useState<boolean>(stageNumber <= 2);
  const animLessons: { height: string; paddingBottom: string } = isShown
    ? { height: `${stageLessons.length * 109 + 21}px`, paddingBottom: "16px" }
    : { height: "0", paddingBottom: "0" };

  return (
    <div className="lesStageBox">
      <div className="stageBox_container">
        <div className="lesStageBoxHead">
          <span className="LesStageNumber">Փուլ {stageNumber}</span>
          <img
            src={isShown ? minusImg : plusImg}
            alt=""
            onClick={() => setIsShown((prev) => !prev)}
            className="cursor-pointer w-[18px] h-[18px]"
          />
        </div>
        <div className="lesStageLessons" style={animLessons}>
          {stageLessons.map(({ title }, i) => (
            <Fragment key={Math.random()}>
              {i !== stageLessons.length - 1 && (
                <hr className="bg-[#BEBFE4] w-full h-[1px]" />
              )}
              <LesStgLesson {...{ title }} lessonNumber={i + 1} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
