import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { CustomBtn } from "../../../../../components/forms";
import { CntTitle } from "../../../../../components/teacherComponents/contTitle/CntTitle";
import {
  exam_schema,
  IExamSchema,
} from "../../../../../validations/exam_schema";
import styles from "./examBody.module.css";
import { ExamCnt } from "./examCnt/ExamCnt";

export const ExamBody: React.FC = () => {
  const methods = useForm<IExamSchema>({
    resolver: yupResolver(exam_schema),
    defaultValues: {
      questionBox: [
        {
          examQuestion: "",
          image: "",
          responseVariants: [
            { variant: "", isVariantTrue: false },
            { variant: "", isVariantTrue: false },
          ],
        },
      ],
    },
  });
  const { handleSubmit, control } = methods;
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
        <div className={styles.mycontainer}>
          <div className={styles.content}>
            <CntTitle title="Քննություն" />
            <ExamCnt {...{ questions }} />
          </div>
          <div className="flex justify-between items-center gap-4">
            <CustomBtn title="Նախորդ էջ" type="button" />
            <div className="flex gap-7 items-center">
              <span className="textPurple textUnderline">Բաց թողնել</span>
              <CustomBtn title="Ստեղծել թեստը" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
