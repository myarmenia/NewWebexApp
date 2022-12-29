import React from "react";
import "./examCnt.css";
import { UseFieldArrayReturn } from "react-hook-form";
import { AttachImage } from "../../examComponents/attachImgae/AttachImage";
import { IExamSchema } from "../../examSchema";
import { QuestionBox } from "../../examComponents/questionBox/QuestionBox";
import { CstmInput } from "../../../../../../components/forms/cstmInput/CstmInput";
import { CstmTextarea } from "../../../../../../components/forms/cstmTextarea/CstmTextarea";

interface ExamCntProps {
  questions: UseFieldArrayReturn<IExamSchema, "questionBox", "id">;
}

export const ExamCnt: React.FC<ExamCntProps> = ({ questions }) => {
  return (
    <div className="examCnt">
      <div className="examCnt1 w-[41.5%]">
        <CstmInput
          type="text"
          placeholder="Քննության վերնագիրը"
          regName="examTitle"
        />
        <CstmTextarea placeholder="Նկարագրություն" regName="describtion" />
        <CstmInput
          type="text"
          placeholder="Անցողիկ շեմը (%)"
          regName="threshold"
        />
        <CstmInput
          type="text"
          placeholder="Քննության տևողությունը (րոպե)"
          regName="duration"
        />
        <AttachImage
          regName="examImage"
          formatTitle="նկար"
          formats={[".jpg", ".png"]}
        />
      </div>
      <hr className="hrMain" />
      <div className="examCnt1 w-[49%]">
        {questions.fields.map((field, i) => {
          return <QuestionBox {...{ field, i, questions }} key={field.id} />;
        })}
        <button
          type="button"
          className="addLessonBtn mt-1"
          onClick={() => {
            questions.append({
              examQuestion: "",
              image: "",
              responseVariants: [{ variant: "", isVariantTrue: false }],
            });
          }}
        >
          + Ավելացնել հարց
        </button>
      </div>
    </div>
  );
};
