import React from "react";
import "./examBody.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { CntTitle } from "../../../lesComponents/contTitle/CntTitle";
import { CustomBtn } from "../../../lesComponents/customBtn/CustomBtn";
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
            <CustomBtn title="Նախորդ էջ" type="button" />
            <div className="flex gap-7 items-center">
              <span className="textPurple textUnderline">Բաց թողնել</span>
              <button
                type="button"
                onClick={() => console.log(watch())}
                className="bg-[red] px-5 py-2 text-white"
              >
                watch
              </button>
              <CustomBtn title="Ստեղծել թեստը" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
