import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useCallback, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { ActionFunction, useNavigate } from "react-router";
import { Form, useSubmit } from "react-router-dom";
import {
  CstmInput,
  CstmTextarea,
  CstmTimeInput,
  CustomBtn,
  CustomCheckbox,
  CustomNmbInp,
  CustomSelect,
} from "../../../../components/forms";
import { AttachFile, LessonTitle } from "../../../../components/reusable";
import {
  ITeacherStages,
  newLesson_schema,
  TeacherSubmitForm,
} from "../../../../validations/newLesson_schema";
import {
  AgeDiv,
  DifferentCourses,
  FinishExam,
  Knowledges,
  Phases,
  TxtWinput,
} from "./blocks";
import styles from "./newLesson.module.css";

export const NewLesson: FC = () => {
  const [areDifferent, setAreDifferent] = useState<boolean>(false);
  const [selectOptions, setOptions] = useState<string[]>([
    "aaa",
    "bbbb",
    "cccc",
  ]);
  const navigate = useNavigate();

  // const navigation = useNavigation();
  // const actionData = useActionData();
  const submit = useSubmit();

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
  const { register, handleSubmit, control, watch } = methods;
  const fieldArray = useFieldArray({
    control,
    name: "stages",
  });
  const { fields } = fieldArray;

  const onSubmit = useCallback((data: TeacherSubmitForm) => {
    let values = JSON.parse(JSON.stringify(data));
    if (!data.areStagesDifferent) {
      values.stages.map((el: ITeacherStages) => {
        delete el.count;
        return el;
      });
    } else {
      delete values.stageLessons;
    }
    if (data.isAgeLimit) {
      delete values.minAgeLimit;
    }
    console.log(values, "porc");
    if (values) {
      submit(values);
      // navigate("lesson_graffic");
    }
  }, []);

  return (
    <div className={styles.mycontainer}>
      <LessonTitle title="Նոր դասընթաց" />
      <FormProvider {...methods}>
        <div className={styles.content}>
          <Form onSubmit={handleSubmit(onSubmit)} method="post">
            <div className={styles.form_content}>
              <div className={styles.box}>
                <CstmInput placeholder="Դասընթացի վերնագիրը*" regName="title" />
                <CustomSelect
                  placeholder="Ընտրել կատեգորիան*"
                  options={selectOptions}
                  regName="select"
                  {...{ setOptions }}
                />
                <CustomSelect
                  placeholder="Ընտրել մակարդակը*"
                  options={["aaa", "bbb"]}
                  regName="select1"
                />
                <Knowledges />
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
                    boxClassName="!w-[50%]"
                  />
                  <span className="text-gray text-xs">Դրամ</span>
                </div>
                <AttachFile label="Բեռնել շապիկի նկարը" regName="coverImage" />
              </div>
              <div className={styles.hr} />
              <div className={[styles.box_lg, styles.box].join(" ")}>
                <div className={styles.stages}>
                  <TxtWinput text="Դասընթացի փուլերի քանակը">
                    <CustomNmbInp
                      regName="stagesCount"
                      minValue={1}
                      value={3}
                      fnDecrease={() => {
                        fieldArray?.remove?.(watch("stagesCount")! - 1);
                      }}
                      fnIncrease={() => {
                        fieldArray?.append?.({
                          stage: watch("stagesCount"),
                          count: 2,
                          stageDescription: "",
                        });
                      }}
                    />
                  </TxtWinput>
                  <div
                    className={`${styles.stage_box} ${
                      areDifferent
                        ? styles.stageBox_opened
                        : styles.stageBox_closed
                    }`}
                  >
                    <div className={styles.txtWcheckbox}>
                      <span className="text-gray text-xs">
                        Մի փուլի դասերի քանակը
                      </span>
                      <CustomCheckbox
                        regName="areStagesDifferent"
                        onClick={() => setAreDifferent(!areDifferent)}
                        label="Փուլերը տարբերվում են"
                      />
                    </div>

                    {areDifferent ? (
                      <DifferentCourses {...{ fields }} />
                    ) : (
                      <CustomNmbInp regName={"stageLessons"} />
                    )}
                  </div>
                  <TxtWinput text="Մի դասի տևողությունը ">
                    <CstmTimeInput regName="lessonTime" defaultValue="02:00" />
                  </TxtWinput>
                </div>
                <Phases {...{ fields }} />
              </div>
            </div>
            <div className={styles.btn_box}>
              <CustomBtn title="Առաջ" type="submit" />
              {/* <CustomBtn
                title="Watch"
                onClick={() => console.log(watch())}
              /> */}
            </div>
          </Form>
        </div>
      </FormProvider>
    </div>
  );
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData);
};
