import { FC } from "react";
import {
  StageBox,
  StageBoxProps,
} from "../../../../../../components/teacherComponents/stageBox/StageBox";
import { generateArray } from "../../../../../../helper";
import { IStageLesson } from "../../../../../../models/interfaces";

const stageLessons = generateArray<IStageLesson>(12, {
  title:
    "«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության  կարեւորությունն ու արդիականությունը",
});

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
