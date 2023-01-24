import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useState } from "react";
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
import styles from "./lessonCntBody.module.css";
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

  const onSubmit = useCallback((data: TeacherSubmitForm) => {
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
  }, []);
  console.log(11);

  return (
    <FormProvider {...methods}>
      <div className={styles.mycontainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form_content}>
            <div className={styles.box}>
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
                options={["aaa", "bbb"]}
                regName="select1"
              />
              <Knowledges {...{ reqKnowledges }} />
              <CstmTextarea
                regName="describtion"
                className="!h-[202px]"
                placeholder="loremadfdsf"
              />
              <AgeDiv />
              <FinishExam text="Վերջնական քննություն" regName="isExam" />
              <FinishExam text="Հավաստագիր" regName="certificate" />
              <div className="flex gap-5 items-center med-750:!w-[50%]">
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
            <div className={styles.hr} />
            <div className={[styles.box_lg, styles.box].join(" ")}>
              <div className={styles.stages}>
                <TxtWinput text="Դասընթացի փուլերի քանակը">
                  <CustomNmbInp
                    defaultValue={3}
                    regName="stagesCount"
                    {...{ fieldArray }}
                  />
                </TxtWinput>
                <div
                  className={`${styles.stage_box} ${
                    isDifferent
                      ? styles.stageBox_opened
                      : styles.stageBox_closed
                  }`}
                >
                  <div className={styles.txtWcheckbox}>
                    <span className="text-gray text-xs">
                      Մի փուլի դասերի քանակը
                    </span>
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        className={styles.checkbox}
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
          <div className={styles.btn_box}>
            <CustomBtn title="Առաջ" type="submit" />
          </div>
        </form>
      </div>
    </FormProvider>
  );
};
