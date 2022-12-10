import React, { FC, useState } from "react";
import { IStageLesson } from "../../../../../../models/interfaces";
import {
  StageBox,
  StageBoxProps,
} from "../../userLesComponents/stageBox/StageBox";

export const LesStages: FC = () => {
  const [stageLessons, setStageLessons] = useState<IStageLesson[]>(
    Array.from({
      length: 10,
    }).map(() => ({
      title:
        "«Գրաֆիկ դիզայն» մասնագիտություն, մասնագիտության  կարեւորությունն ու արդիականությունը",
      isShown: false,
    }))
  );
  const [stagesArr, setStagesArr] = useState<StageBoxProps[]>([
    { stageLessons: stageLessons },
    { stageLessons: stageLessons },
    { stageLessons: stageLessons },
  ]);
  return (
    <div className="flex flex-col gap-3">
      {stagesArr.map(({ stageLessons }, i) => (
        <StageBox stageNumber={1 + i} {...{ stageLessons }} key={i} />
      ))}
    </div>
  );
};
