import React, { useState } from "react";
import "./lessonCntBody.css";
import { CustomSelect } from "../customSelect/CustomSelect";
import { ISelect } from "../../../../models/interfaces";
import { AgeDiv } from "./ageDiv/AgeDiv";
import { FinishExam } from "./finishExam/FinishExam";
import downloadImg from "../../../../images/Teacher/NewLesson/download.svg";
import { CustomNmbInp } from "./customNmbInp/CustomNmbInp";
import { TxtWinput } from "./txtWinput/TxtWinput";

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

  return (
    <div className="LessonCntBody">
      <form action="">
        <div className="LessonCntBody_box">
          <input
            className="lessonInp"
            type="text"
            placeholder="Դասընթացի վերնագիրը*"
          />
          <CustomSelect select={selectVals} setselectVals={setselectVals} />
          <CustomSelect select={dificultyLevels} />
          <textarea
            className="lessonTextarea lessonInp"
            placeholder="lorem isup*"
          ></textarea>
          <AgeDiv />
          <FinishExam text="Վերջնական քննություն" />
          <FinishExam text="Հավաստագիր" />
          <div className="flex gap-5 items-center">
            <input
              className="lessonInp w-[40%]"
              type="text"
              placeholder="Դասընթացի արժեքը*"
            />
            <span className="text-[#6B6B6B] text-xs">Դրամ</span>
          </div>
          <button className="flex gap-[13px] items-center w-fit" type="button">
            <img src={downloadImg} alt="" />
            <span className="text-[#6B6B6B] text-xs">Բեռնել շապիկի նկարը</span>
          </button>
          <button className="addLessonBtn">Առաջ</button>
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
              <div className="differentCourses">
                {Array.from(
                  { length: lessonsCount },
                  (v: unknown, k: number) => k
                ).map((el, index) => {
                  return (
                    <div className="flex flex-col gap-1" key={index}>
                      <span className="text-[#6B6B6B] text-[10px]">
                        Փուլ {index + 1}
                      </span>
                      <CustomNmbInp min={1} max={100} defaultValue={12} />
                    </div>
                  );
                })}
              </div>
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
        </div>
      </form>
    </div>
  );
};
