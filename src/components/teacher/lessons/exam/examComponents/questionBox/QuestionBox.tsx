import React, { MouseEvent } from "react";
import "./questionBox.css";
import { CstmTextarea } from "../../../../lesComponents/cstmTextarea/CstmTextarea";
import { LoadImage } from "../../../../lesComponents/loadImage/LoadImage";
import trashbinImg from "../../../../../../images/Teacher/Exam/delete.svg";
import addVariantImg from "../../../../../../images/Teacher/Exam/Group 1552.svg";
import {
  FieldArrayWithId,
  UseFieldArrayReturn,
  useFormContext,
} from "react-hook-form";
import { IExamSchema } from "../../examSchema";
import { ResVariant } from "../resVariant/ResVariant";

interface QuestionBoxProps {
  field: FieldArrayWithId<IExamSchema, "questionBox", "id">;
  questions: UseFieldArrayReturn<IExamSchema, "questionBox", "id">;
  i: number;
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({
  field,
  questions,
  i,
}) => {
  const { watch } = useFormContext();
  const addVariant = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    questions.update(i, {
      ...field,
      examQuestion: watch("questionBox")[i].examQuestion,
      responseVariants: [
        ...field.responseVariants,
        {
          variant: "",
          isVariantTrue: false,
        },
      ],
    });
  };
  return (
    <div className="questionBox">
      {i > 0 && <div className="overLine" />}
      <div className="questionPart">
        <div className="flex items-center gap-[17px]">
          <span className="questionTitle">{`Հարց ${i + 1}`}</span>
          <img
            src={trashbinImg}
            alt=""
            className="cursor-pointer"
            onClick={() => questions.remove(i)}
          />
        </div>
        <div className="flex gap-[27px] items-center">
          <CstmTextarea
            regName={`questionBox.${i}.examQuestion`}
            placeholder="Քննության հարցը"
            className="!h-[119px]"
          />
          <LoadImage
            regName={`questionBox.${i}.image`}
            className={{
              div: "h-full w-[174px] !gap-5",
              img: "scale-150",
              text: "text-[12px]",
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="questionTitle">Պատասխան</span>
        <div className="flex flex-col gap-5">
          {field.responseVariants.map((resp, ind) => {
            return <ResVariant {...{ questions, field, ind, i }} key={ind} />;
          })}
        </div>
        <button
          className="flex items-center gap-2"
          onClick={addVariant}
          type="button"
        >
          <img src={addVariantImg} alt="" />
          <span className="text-[#6B6B6B] text-xs">ավելացնել տարբերակ</span>
        </button>
      </div>
    </div>
  );
};
