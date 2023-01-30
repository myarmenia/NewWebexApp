import { FC } from "react";
import { StageBoxProps } from "../../../../../../components/teacherComponents/stageBox/StageBox";
import { generateArray } from "../../../../../../helper";
import { IStageLesson } from "../../../../../../models/interfaces";
import { StdStageBox } from "../stdStageBox/StdStageBox";

const stageLessons = generateArray<IStageLesson>(12, {
  title:
    "«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության  կարեւորությունն ու արդիականությունը",
});

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
