import React from "react";
import styles from "./firstLesCont.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import {
  firstLesson_schema,
  IFirstLessonSchema,
} from "../../../../../validations/firstLesson_schema";
import { StageBody } from "./stageBody/StageBody";
import { StageLessons } from "./stageLessons/StageLessons";
import { Route, Routes } from "react-router";
import { CntTitle } from "../../../../../components/teacherComponents/contTitle/CntTitle";
import { CustomBtn } from "../../../../../components/forms";

export const FirstLesCont: React.FC = () => {
  const methods = useForm<IFirstLessonSchema>({
    resolver: yupResolver(firstLesson_schema),
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: IFirstLessonSchema) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.mycontainer}>
          <div className={styles.content}>
            <CntTitle title="ՓՈՒԼ 1" />
            <Routes>
              <Route path="/" element={<StageBody />} />
              <Route path="all_stages" element={<StageLessons />} />
            </Routes>
            {/* <StageBody /> */}
            {/* <StageLessons /> */}
          </div>
          <div className={styles.btn_box}>
            <CustomBtn title="Հաջորդ դասը" type="submit" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
