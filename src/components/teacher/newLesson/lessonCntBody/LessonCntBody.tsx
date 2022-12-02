import React, { useState } from "react";
import "./lessonCntBody.css";
import { ISelect } from "../../../../models/interfaces";
import { AgeDiv } from "./ageDiv/AgeDiv";
import { FinishExam } from "./finishExam/FinishExam";
import downloadImg from "../../../../images/Teacher/NewLesson/download.svg";
import { CustomNmbInp } from "./customNmbInp/CustomNmbInp";
import { TxtWinput } from "./txtWinput/TxtWinput";
import { DifferentCourses } from "./differentCourses/DifferentCourses";
import { Phases } from "./phases/Phases";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomSelect } from "../customSelect/CustomSelect";
import { nLessCreate_L_Schema, TeacherSubmitForm } from "./validationSchema";
import Input from "../../../sherid/Input";
import { CstmInput } from "./cstmInput/CstmInput";

export const LessonCntBody: React.FC = () => {
  const [selectVals, setselectVals] = useState<ISelect>({
    title: "Ընտրել կատեգորիան*",
    options: ["aaa", "bbbb", "cccc"],
  });
  const dificultyLevels: ISelect = {
    title: "Ընտրել մակարդակը*",
    options: ["aaa", "bbb"],
  };
  const [isDifferent, setIsDifferent] = useState<boolean>(false);
  const [lessonsCount, setLessonCount] = useState<number>(3);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<TeacherSubmitForm>({
    resolver: yupResolver(nLessCreate_L_Schema),
  });
  const onSubmit = (data: TeacherSubmitForm) => {
    console.log(data);
  };

  return (
    <div className="LessonCntBody">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-[58px]">
          <div className="LessonCntBody_box">
            <CstmInput
              placeholder="Դասընթացի վերնագիրը*"
              type="text"
              register={register("title")}
              error={errors.title?.message}
            />
            <CustomSelect
              select={selectVals}
              setselectVals={setselectVals}
              isInput={true}
              setValue={setValue}
              register={register("select")}
              error={errors.select?.message}
              selectName={"select"}
            />
            <CustomSelect
              select={dificultyLevels}
              setValue={setValue}
              selectName="select1"
              register={register("select1")}
              error={errors.select1?.message}
            />
            <textarea
              className="lessonTextarea lessonInp"
              placeholder="lorem isup*"
            ></textarea>
            <AgeDiv
              register={[
                { ...register("minAgeLimit") },
                { ...register("maxAgeLimit") },
              ]}
              setValue={setValue}
            />
            <FinishExam text="Վերջնական քննություն" />
            <FinishExam text="Հավաստագիր" />
            <div className="flex gap-5 items-center">
              <CstmInput
                placeholder="Դասընթացի արժեքը*"
                type="number"
                register={register("cost")}
                error={errors.cost?.message}
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
          <div className="bg-[#BEBFE4] mt-5 h-[450px] w-[1px]" />
          <div className="LessonCntBody_box2 LessonCntBody_box">
            <TxtWinput text="Դասընթացի փուլերի քանակը">
              <CustomNmbInp
                min={2}
                max={100}
                lessonsCount={lessonsCount}
                setLessonCount={setLessonCount}
              />
            </TxtWinput>
            <div
              className={`flex justify-between ${
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
                  />
                  <span>Փուլերը տարբերվում են</span>
                </div>
              </div>

              {isDifferent ? (
                <DifferentCourses lessonsCount={lessonsCount} />
              ) : (
                <CustomNmbInp min={1} max={100} defaultValue={12} />
              )}
            </div>
            <TxtWinput text="Մի դասի տևողությունը ">
              <input
                type="time"
                defaultValue={"02:00:00"}
                step="1"
                className="lessonInp timeInp"
              />
            </TxtWinput>
            <Phases lessonsCount={lessonsCount} />
          </div>
        </div>

        <button type="submit" className="addLessonBtn">
          Առաջ
        </button>
        <button
          type="button"
          className="addLessonBtn"
          onClick={() => {
            console.log(watch("maxAgeLimit"), watch("minAgeLimit"));
            // console.log(111);
          }}
        >
          watch
        </button>
      </form>
    </div>
  );
};
