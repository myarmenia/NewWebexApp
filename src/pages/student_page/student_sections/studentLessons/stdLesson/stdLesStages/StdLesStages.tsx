import React, { FC } from "react";
import { IStageLesson } from "../../../../../../models/interfaces";
import {
  StageBox,
  StageBoxProps,
} from "../../../../../../components/teacherComponents/stageBox/StageBox";
import { StdStageBox } from "../stdStageBox/StdStageBox";

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
export const StdLesStages: FC = () => {
  return (
    <div className="flex flex-col gap-3">
      {stagesArr.map(({ stageLessons }, i) => (
        <StdStageBox stageNumber={1 + i} {...{ stageLessons }} key={i} />
      ))}
    </div>
  );
};
