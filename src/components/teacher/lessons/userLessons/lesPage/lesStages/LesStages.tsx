import React, { FC } from "react";
import { useLoaderData } from "react-router";
import { IStageLesson } from "../../../../../../models/interfaces";
import {
  StageBox,
  StageBoxProps,
} from "../../userLesComponents/stageBox/StageBox";

const stageLessons: IStageLesson[] = Array.from({
  length: 12,
}).map(() => ({
  title:
    "«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության  կարեւորությունն ու արդիականությունը",
}));

export const stagesArr: StageBoxProps[] = [
  { stageLessons: stageLessons },
  { stageLessons: stageLessons },
  { stageLessons: stageLessons },
];
export const LesStages: FC = () => {
  return (
    <div className="flex flex-col gap-3">
      {stagesArr.map(({ stageLessons }, i) => (
        <StageBox stageNumber={1 + i} {...{ stageLessons }} key={i} />
      ))}
    </div>
  );
};
