import React from "react";
import "./firstLesCont.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { CstmInput } from "../../../lesComponents/cstmInput/CstmInput";
import { SubmitBtn } from "../../../lesComponents/submitBtn/SubmitBtn";
import { firstLessonSchema, IFirstLessonSchema } from "../firstLesSchema";
import { BoxTitle } from "./BoxTitle";
import { AttachFile } from "./attachFile/AttachFile";
import { LoadImage } from "../../../lesComponents/loadImage/LoadImage";
import { SaveDataDiv } from "./SaveDataDiv";
import { StageBody } from "./stageBody/StageBody";
import { StageLessons } from "./stageLessons/StageLessons";
import { CntTitle } from "../../../lesComponents/contTitle/CntTitle";

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
            <CntTitle title="ՓՈՒԼ 1" />
            {/* <StageBody /> */}
            <StageLessons />
          </div>
          <div className="nextBtnCont">
            <SubmitBtn title="Հաջորդ դասը" type="submit"/>
            <button
              type="button"
              className="addLessonBtn"
              onClick={() => {
                console.log(watch());
              }}
            >
              watch
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
