import { FC, useState } from "react";
import { useLoaderData } from "react-router";
import minusImg from "../../../assets/teacher_images/userLessons/minusImg.svg";
import plusImg from "../../../assets/teacher_images/userLessons/plusImg.svg";
import { ILessonLoaderData, IStageLesson } from "../../../models/interfaces";
import { StageLesson } from "../../../pages/teacher_page/blocks/userLessons/userLesComponents/stageLesson/StageLesson";
import styles from "./stageBox.module.css";

export interface StageBoxProps {
  stageNumber?: number;
  stageLessons: IStageLesson[];
}

export const StageBox: FC<StageBoxProps> = ({ stageNumber, stageLessons }) => {
  const { lessonsObj } = useLoaderData() as ILessonLoaderData;
  const [isShown, setIsShown] = useState<boolean>(stageNumber === 2);

  const animLessons = isShown
    ? {
        height: `${lessonsObj.length * 43 + 21}px`,
      }
    : { height: "0" };

  return (
    <div className={styles.stageBox}>
      <div className={styles.stageBoxHead}>
        <span>Փուլ {stageNumber}</span>
        <img
          src={isShown ? minusImg : plusImg}
          alt=""
          onClick={() => setIsShown((prev) => !prev)}
          className="cursor-pointer h-5 w-5"
        />
      </div>
      <div className={styles.stageLessons} style={animLessons}>
        <hr className="w-full bg-[#CCCCCC] h-[1px] mt-5" />
        {lessonsObj.map(({ body, id }, i) => (
          <StageLesson title={body} lessonNumber={id} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};
