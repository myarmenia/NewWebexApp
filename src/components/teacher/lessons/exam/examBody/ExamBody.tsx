import React from "react";
import "./examBody.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { CntTitle } from "../../../lesComponents/contTitle/CntTitle";
import { SubmitBtn } from "../../../lesComponents/submitBtn/SubmitBtn";
import { examSchema, IExamSchema } from "../examSchema";
import { ExamCnt } from "./examCnt/ExamCnt";

export const ExamBody: React.FC = () => {
  const methods = useForm<IExamSchema>({
    resolver: yupResolver(examSchema),
    defaultValues: {
      questionBox: [
        { examQuestion: "", image: "", responseVariants: [{ variant: "" }] },
      ],
    },
  });
  const {
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = methods;
  const questions = useFieldArray({
    control,
    name: "questionBox",
  });
  const onSubmit = (data: IExamSchema) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lessonCont">
          <div className="examCont">
            <CntTitle title="Քննություն" />
            <ExamCnt {...{ questions }} />
          </div>
          <div className="nextBtnCont">
            <SubmitBtn title="Հաջորդ դասը" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
