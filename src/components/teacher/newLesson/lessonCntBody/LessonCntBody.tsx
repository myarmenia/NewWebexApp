import React, { useEffect, useState } from "react";
import "./lessonCntBody.css";
import { ISelect } from "../../../../models/interfaces";
import { AgeDiv } from "./ageDiv/AgeDiv";
import { FinishExam } from "./finishExam/FinishExam";
import downloadImg from "../../../../images/Teacher/NewLesson/download.svg";
import { CustomNmbInp } from "./customNmbInp/CustomNmbInp";
import { TxtWinput } from "./txtWinput/TxtWinput";
import { DifferentCourses } from "./differentCourses/DifferentCourses";
import { Phases } from "./phases/Phases";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomSelect } from "../customSelect/CustomSelect";
import { nLessCreate_L_Schema, TeacherSubmitForm } from "./validationSchema";
import { CstmInput } from "./cstmInput/CstmInput";
import closeImg from "../../../../images/Teacher/NewLesson/X.svg";

export const LessonCntBody: React.FC = () => {
  const [reqKnowledges, setReqKnowledges] = useState<string[]>([]);

  const [selectVals, setselectVals] = useState<ISelect>({
    title: "Ընտրել կատեգորիան*",
    options: ["aaa", "bbbb", "cccc"],
  });
  const dificultyLevels: ISelect = {
    title: "Ընտրել մակարդակը*",
    options: ["aaa", "bbb"],
  };
  const [isDifferent, setIsDifferent] = useState<boolean>(false);

  const methods = useForm<TeacherSubmitForm>({
    resolver: yupResolver(nLessCreate_L_Schema),
    defaultValues: {
      stages: [
        { stage: 0, count: 2, stageDescription: "" },
        { stage: 1, count: 2, stageDescription: "" },
        { stage: 2, count: 2, stageDescription: "" },
      ],
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    control,
  } = methods;
  const fieldArray = useFieldArray<TeacherSubmitForm, "stages", "id">({
    control,
    name: "stages",
  });
  const { fields, append, remove } = fieldArray;

  // useEffect(() => {
  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // myFunction();
      // setReqKnowledges([...reqKnowledges, watch("requiredKnowledge")]);
      setReqKnowledges([...reqKnowledges, watch("requiredKnowledge")]);
      setValue("requiredKnowledge", "");
      console.log(reqKnowledges);
    }
  };
  // document.addEventListener("keydown", keyDownHandler);
  // }, []);

  const onSubmit = (data: TeacherSubmitForm) => {
    let valus={}
    if(!data.areStagesDifferent){
      valus = {
        ...data,
        stages: data.stages.map((el) => ({ ...el, count: null })),
      };
    }else{
      valus = data
    }
    
    console.log(valus, "porc");
  };
  return (
    <FormProvider {...methods}>
      <div className="LessonCntBody">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lessonContainer">
            <div className="LessonCntBody_box">
              <CstmInput
                placeholder="Դասընթացի վերնագիրը*"
                type="text"
                regName="title"
              />
              <CustomSelect
                select={selectVals}
                {...{ setselectVals }}
                isInput={true}
                regName="select"
              />
              <CustomSelect select={dificultyLevels} regName="select1" />
              <div className="flex flex-col gap-5">
                <CstmInput
                  type="text"
                  placeholder="Ավելացնել պահանջվող նախնական գիտելիքները"
                  regName="requiredKnowledge"
                  onKeyDown={keyDownHandler}
                />
                {!!reqKnowledges.length && (
                  <div className="flex gap-2">
                    {reqKnowledges.map((el, i) => {
                      return (
                        <div
                          key={i}
                          className="flex justify-between items-center gap-[10px] bg-[#7764FB] text-xs text-white opacity-80 px-[18px] py-[5px] rounded-[30px]"
                        >
                          <span className="leading-3">{el}</span>
                          <img className="h-2" src={closeImg} alt="" />
                        </div>
                      );
                    })}
                  </div>
                )}
                {/* <div className="flex gap-2">
                  {reqKnowledges.map((el, i) => {
                    return (
                      <div
                        key={i}
                        className="flex justify-between items-center gap-[10px] bg-[#7764FB] text-xs text-white opacity-80 px-[18px] py-[5px] rounded-[30px]"
                      >
                        <span className="leading-3">{el}</span>
                        <img className="h-2" src={closeImg} alt="" />
                      </div>
                    );
                  })}
                </div> */}
              </div>
              <textarea
                className="lessonTextarea lessonInp"
                placeholder="lorem isup*"
                {...register("describtion")}
              ></textarea>
              <AgeDiv />
              <FinishExam text="Վերջնական քննություն" regName="isExam" />
              <FinishExam text="Հավաստագիր" regName="certificate" />
              <div className="flex gap-5 items-center">
                <CstmInput
                  placeholder="Դասընթացի արժեքը*"
                  type="number"
                  regName="cost"
                />
                <span className="text-[#6B6B6B] text-xs">Դրամ</span>
              </div>
              <button
                className="flex gap-[13px] items-center w-fit"
                type="button"
              >
                <img src={downloadImg} alt="" />
                <span className="text-[#6B6B6B] text-xs">
                  Բեռնել շապիկի նկարը
                </span>
              </button>
            </div>
            <div className="hrMain" />
            <div className="LessonCntBody_box2 LessonCntBody_box">
              <div className="stagesContainer">
                <TxtWinput text="Դասընթացի փուլերի քանակը">
                  <CustomNmbInp
                    defaultValue={3}
                    regName="stagesCount"
                    {...{ remove, append }}
                  />
                </TxtWinput>
                <div
                  className={`stageBox ${
                    isDifferent ? "w-[497px]" : "w-[279px]"
                  }`}
                >
                  <div className="txtWcheckbox">
                    <span className="text-[#6B6B6B] text-xs">
                      Մի փուլի դասերի քանակը
                    </span>
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        className="customCheckbox"
                        onClick={() => setIsDifferent(!isDifferent)}
                        {...register("areStagesDifferent")}
                      />
                      <span>Փուլերը տարբերվում են</span>
                    </div>
                  </div>

                  {isDifferent ? (
                    <DifferentCourses {...{ fields }} />
                  ) : (
                    <CustomNmbInp defaultValue={12} regName={"stageLessons"} />
                  )}
                </div>
                <TxtWinput text="Մի դասի տևողությունը ">
                  <input
                    type="time"
                    defaultValue={"02:00:00"}
                    step="1"
                    className="lessonInp timeInp"
                    {...register("lessonTime")}
                  />
                </TxtWinput>
              </div>
              <Phases {...{ fields }} />
            </div>
          </div>
          <div className="nextBtnCont">
            <button type="submit" className="addLessonBtn ">
              Առաջ
            </button>
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
        </form>
      </div>
    </FormProvider>
  );
};
