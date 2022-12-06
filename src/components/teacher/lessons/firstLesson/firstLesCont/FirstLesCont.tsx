import React from "react";
import "./firstLesCont.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { CstmInput } from "../../../lesComponents/cstmInput/CstmInput";
import { SubmitBtn } from "../../../lesComponents/submitBtn/SubmitBtn";
import { firstLessonSchema, IFirstLessonSchema } from "../firstLesSchema";
import { ContTitle } from "./contTitle/ContTitle";
import { LessonTitle } from "./LessonTitle";
import { AttachFile } from "./attachFile/AttachFile";
import { LoadImage } from "./loadImage/LoadImage";
import { SaveDataDiv } from "./SaveDataDiv";

export const FirstLesCont: React.FC = () => {
  const methods = useForm<IFirstLessonSchema>({
    resolver: yupResolver(firstLessonSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
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
            <ContTitle title="ՓՈՒԼ 1" />
            <div className="lessonContainer">
              <div className="lessonContainer1">
                <LessonTitle title="Դաս 1" />
                <div className="LessonCntBody_box">
                  <div className="LessonCntBody_boxContent">
                    <CstmInput
                      type="text"
                      placeholder="Դասի վերնագիրը*"
                      regName="lessonTitle"
                      className="shadow-my1"
                    />
                    <CstmInput
                      type="text"
                      placeholder="Տեսանյութ (կցել youtube-ի հղումը)"
                      regName="videoInp"
                      className="shadow-my1"
                    />
                    <textarea
                      className="lessonTextarea lessonInp"
                      placeholder="Բովանդակություն"
                      {...register("contents")}
                    ></textarea>
                    <div className="flex justify-between">
                      <AttachFile title="Հավելյալ նյութերը" />
                      <LoadImage />
                    </div>
                  </div>
                  <SaveDataDiv />
                </div>
              </div>
              <div className="hrMain" />
              <div className="lessonContainer1">
                <LessonTitle title="Տնային հանձնարարություն" />
                <div className="LessonCntBody_box">
                  <div className="LessonCntBody_boxContent">
                    <CstmInput
                      type="text"
                      placeholder="Տեսանյութ (կցել youtube-ի հղումը)"
                      regName="videoInpHomework"
                      className="shadow-my1"
                    />
                    <textarea
                      className="lessonTextarea lessonInp"
                      placeholder="Բովանդակություն"
                      {...register("contentsHomework")}
                    ></textarea>
                    <div className="flex justify-between">
                      <AttachFile title="Տնային աշխատանքի նյութերը" />
                      <LoadImage />
                    </div>
                  </div>
                  <SaveDataDiv />
                </div>
              </div>
            </div>
          </div>
          <div className="nextBtnCont">
            <SubmitBtn title="Հաջորդ դասը" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
