import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import downloadImg from "../../../../../assets/teacher_images/newLesson/download.svg";
import {
  CstmInput,
  CstmTextarea,
  CustomBtn,
  CustomNmbInp,
  CustomSelect,
} from "../../../../../components/forms";
import { AgeDiv } from "./ageDiv/AgeDiv";
import { DifferentCourses } from "./differentCourses/DifferentCourses";
import { FinishExam } from "./finishExam/FinishExam";
import { Knowledges } from "./knowledges/Knowledges";
import "./lessonCntBody.css";
import { Phases } from "./phases/Phases";
import { TxtWinput } from "./txtWinput/TxtWinput";
import {
  newLesson_schema,
  TeacherSubmitForm,
} from "../../../../../validations/newLesson_schema";

export const LessonCntBody: React.FC = () => {
  const navigate = useNavigate();
  const [selectOptions, setOptions] = useState<string[]>([
    "aaa",
    "bbbb",
    "cccc",
  ]);
  const dificultyLevels: string[] = ["aaa", "bbb"];

  const [isDifferent, setIsDifferent] = useState<boolean>(false);

  const methods = useForm<TeacherSubmitForm>({
    resolver: yupResolver(newLesson_schema),
    defaultValues: {
      stages: [
        { stage: 0, count: 2, stageDescription: "" },
        { stage: 1, count: 2, stageDescription: "" },
        { stage: 2, count: 2, stageDescription: "" },
      ],
      requiredKnowledges: [],
    },
  });
  const { register, handleSubmit, control } = methods;
  const fieldArray = useFieldArray({
    control,
    name: "stages",
  });
  const reqKnowledges = useFieldArray({
    control,
    name: "requiredKnowledges",
  });
  const { fields } = fieldArray;

  const onSubmit = (data: TeacherSubmitForm) => {
    let values;
    if (!data.areStagesDifferent) {
      let myStages = data.stages.map((el) => {
          delete el.count;
          return el;
        }),
        values = {
          ...data,
          stages: myStages,
        };
    } else {
      delete data.stageLessons;
      values = { ...data };
    }
    if (data.isAgeLimit) {
      delete data.minAgeLimit;
      delete data.maxAgeLimit;
      values = { ...data };
    } else {
      values = data;
    }

    console.log(values, "porc");
    console.log(!data.areStagesDifferent);

    if (values) {
      navigate("lesson_graffic");
    }
  };
  return (
    <FormProvider {...methods}>
      <div className="LessonCntBody">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lessonContainer newLesCont">
            <div className="LessonCntBody_box">
              <CstmInput placeholder="Դասընթացի վերնագիրը*" regName="title" />
              <CustomSelect
                placeholder="Ընտրել կատեգորիան*"
                options={selectOptions}
                regName="select"
                isMutable={{
                  isInput: true,
                  setOptions,
                }}
              />
              <CustomSelect
                placeholder="Ընտրել մակարդակը*"
                options={dificultyLevels}
                regName="select1"
              />
              <Knowledges {...{ reqKnowledges }} />
              <CstmTextarea
                regName="describtion"
                className="lessonInp h-[202px]"
                placeholder="loremadfdsf"
              />
              <AgeDiv />
              <FinishExam text="Վերջնական քննություն" regName="isExam" />
              <FinishExam text="Հավաստագիր" regName="certificate" />
              <div className="flex gap-5 items-center">
                <CstmInput
                  placeholder="Դասընթացի արժեքը*"
                  type="number"
                  regName="cost"
                />
                <span className="text-gray text-xs">Դրամ</span>
              </div>
              <button
                className="flex gap-[13px] items-center w-fit"
                type="button"
              >
                <img src={downloadImg} alt="" />
                <span className="text-gray text-xs">Բեռնել շապիկի նկարը</span>
              </button>
            </div>
            <div className="hrMain" />
            <div className="LessonCntBody_box2 LessonCntBody_box">
              <div className="stagesContainer">
                <TxtWinput text="Դասընթացի փուլերի քանակը">
                  <CustomNmbInp
                    defaultValue={3}
                    regName="stagesCount"
                    {...{ fieldArray }}
                  />
                </TxtWinput>
                <div
                  className={`stageBox1 ${
                    isDifferent ? "stageBox_opened" : "stageBox_closed"
                  }`}
                >
                  <div className="txtWcheckbox">
                    <span className="text-gray text-xs">
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
            <CustomBtn title="Առաջ" type="submit" />
          </div>
        </form>
      </div>
    </FormProvider>
  );
};
