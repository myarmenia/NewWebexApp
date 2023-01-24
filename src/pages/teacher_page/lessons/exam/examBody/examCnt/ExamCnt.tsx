import React from "react";
import styles from "./examCnt.module.css";
import { UseFieldArrayReturn } from "react-hook-form";
import { AttachImage } from "../../examComponents/attachImgae/AttachImage";
import { IExamSchema } from "../../../../../../validations/exam_schema";
import { QuestionBox } from "../../examComponents/questionBox/QuestionBox";
import { CstmInput, CustomBtn } from "../../../../../../components/forms";
import { CstmTextarea } from "../../../../../../components/forms";

interface ExamCntProps {
  questions: UseFieldArrayReturn<IExamSchema, "questionBox", "id">;
}

export const ExamCnt: React.FC<ExamCntProps> = ({ questions }) => {
  return (
    <div className={styles.mycontainer}>
      <div className={styles.box + " w-[41.5%]"}>
        <CstmInput placeholder="Քննության վերնագիրը" regName="examTitle" />
        <CstmTextarea placeholder="Նկարագրություն" regName="describtion" />
        <CstmInput placeholder="Անցողիկ շեմը (%)" regName="threshold" />
        <CstmInput
          placeholder="Քննության տևողությունը (րոպե)"
          regName="duration"
        />
        <AttachImage
          regName="examImage"
          formatTitle="նկար"
          formats={[".jpg", ".png"]}
        />
      </div>
      <hr className={styles.hr} />
      <div className={styles.box + " w-[49%]"}>
        {questions.fields.map((field, i) => {
          return <QuestionBox {...{ field, i, questions }} key={field.id} />;
        })}
        <CustomBtn
          title="+ Ավելացնել հարց"
          className="!mt-1"
          onClick={() => {
            questions.append({
              examQuestion: "",
              image: "",
              responseVariants: [{ variant: "", isVariantTrue: false }],
            });
          }}
        />
      </div>
    </div>
  );
};
