import React, { MouseEvent } from "react";
import trashbinImg from "../../../../../assets/teacher_images/exam/delete.svg";
import addVariantImg from "../../../../../assets/teacher_images/exam/Group 1552.svg";
import {
  FieldArrayWithId,
  UseFieldArrayReturn,
  useFormContext,
} from "react-hook-form";
import { IExamSchema } from "../../../../../validations/exam_schema";
import { ResVariant } from "./ResVariant";
import { LoadImage } from "../../../../../components/reusable/loadImage/LoadImage";
import { CstmTextarea } from "../../../../../components/forms";

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
    <div className="flex flex-col gap-[17px]">
      {i > 0 && <div className="h-[1px] bg-[#BEBFE4] -mt-[5px]" />}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-[17px]">
          <span className="text-gray text-sm">{`Հարց ${i + 1}`}</span>
          <img
            src={trashbinImg}
            alt=""
            className="cursor-pointer"
            onClick={() => questions.remove(i)}
          />
        </div>
        <div className="flex gap-[27px] items-center med-480:flex-col med-480:items-start">
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
        <span className="text-gray text-sm">Պատասխան</span>
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
          <span className="text-gray text-xs">ավելացնել տարբերակ</span>
        </button>
      </div>
    </div>
  );
};
