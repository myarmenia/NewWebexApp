import React from "react";
import "./firstLesCont.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { CstmInput } from "../../../lesComponents/cstmInput/CstmInput";
import { SubmitBtn } from "../../../lesComponents/submitBtn/SubmitBtn";
import { firstLessonSchema, IFirstLessonSchema } from "../firstLesSchema";
import { BoxTitle } from "./BoxTitle";
import { AttachFile } from "../../../lesComponents/attachFile/AttachFile";
import { LoadImage } from "../../../lesComponents/loadImage/LoadImage";
import { SaveDataDiv } from "./SaveDataDiv";
import { StageBody } from "./stageBody/StageBody";
import { StageLessons } from "./stageLessons/StageLessons";
import { CntTitle } from "../../../lesComponents/contTitle/CntTitle";
import { Route, Routes } from "react-router";

export const FirstLesCont: React.FC = () => {
  const methods = useForm<IFirstLessonSchema>({
    resolver: yupResolver(firstLessonSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;

  const onSubmit = (data: IFirstLessonSchema) => {
    console.log(data);
    // fetch("https://fakestoreapi.com/products", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then(() => console.log("posted"));
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lessonCont">
          <div className="firstLesCont">
            <div className="my_background_04" />
            <CntTitle title="ՓՈՒԼ 1" />
            <Routes>
              <Route path="/" element={<StageBody />} />
              <Route path="all_stages" element={<StageLessons />} />
            </Routes>
            {/* <StageBody /> */}
            {/* <StageLessons /> */}
          </div>
          <div className="nextBtnCont1">
            <SubmitBtn title="Հաջորդ դասը" type="submit" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
