import React, { FC } from "react";
import "./lesPage.css";
import { LesContainer } from "../userLesComponents/lesContainer/LesContainer";
import editImg from "../../../../../images/Teacher/UserLessons/editGray.svg";
import { LesPTitle } from "./lesPTitle/LesPTitle";
import { LesImageBox } from "./lesImageBox/LesImageBox";
import { LesBoxProps } from "../userLesComponents/lesBox/LesBox";
import { LesCases } from "./lesCases/LesCases";
import { LesStages } from "./lesStages/LesStages";

interface LesPageProps extends LesBoxProps {
  // title: string;
  stageCount: number;
  stageLessons: number;
  lessonTime: 2;
}

// title: string;
// keys: string[];
// description: string;
// price: string;
// video: string;

export const LesPage: FC<LesPageProps> = ({
  title,
  stageCount,
  stageLessons,
  lessonTime,
  studentsCount,
  description,
  keys,
  price,
}) => {
  return (
    <div className="lesPage">
      <div className="my_background_06" />
      <div className="lesPage_container">
        <LesContainer>
          <LesPTitle {...{ title }} />
        </LesContainer>
        <LesImageBox {...{ stageCount, stageLessons, lessonTime }} />
        <LesContainer>
          <LesCases {...{ studentsCount, title, description, price, keys }} />
          <LesStages />
        </LesContainer>
      </div>
    </div>
  );
};
