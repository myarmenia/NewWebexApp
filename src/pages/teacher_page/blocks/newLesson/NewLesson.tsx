import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useCallback, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation
} from "react-router";
import { useFetcher, useFormAction } from "react-router-dom";
import {
  CstmInput,
  CstmTextarea,
  CstmTimeInput,
  CustomBtn,
  CustomCheckbox,
  CustomNmbInp,
  CustomSelect
} from "../../../../components/forms";
import { AttachFile, LessonTitle } from "../../../../components/reusable";
import { toFormData, toObject } from "../../../../helper";
import { useAppSubmit } from "../../../../hooks";
import {
  ITeacherStages,
  newLesson_schema,
  TeacherSubmitForm
} from "../../../../validations/newLesson_schema";
import {
  AgeDiv,
  DifferentCourses,
  FinishExam,
  Knowledges,
  Phases,
  TxtWinput
} from "./blocks";
import styles from "./newLesson.module.css";

const NewLessonComp: FC = () => {
  const [areDifferent, setAreDifferent] = useState<boolean>(false);
  const [selectOptions, setOptions] = useState<string[]>([
    "aaa",
    "bbbb",
    "cccc",
  ]);
  const navigate = useNavigate();

  const navigation = useNavigation();
  // const actionData = useActionData();
  // const submit = useSubmit();
  const submit = useAppSubmit();
  const fetcher = useFetcher();
  const loaderData = useLoaderData();
  let action = useFormAction();

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
  const { handleSubmit, control, watch } = methods;
  const fieldArray = useFieldArray({
    control,
    name: "stages",
  });
  const { fields } = fieldArray;

  const onSubmit = useCallback((data: TeacherSubmitForm) => {
    let values = JSON.parse(JSON.stringify(data)) as TeacherSubmitForm;
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
    if (watch("coverImage")) {
      const file = watch("coverImage");
      values.coverImage = file;
    }

    if (values) {
      const formData = toFormData(values);
      submit(formData, {
        action: "/teacher/new_lesson?index",
        method: "post",
      });
    }
  }, []);

  return (
    <div className={styles.mycontainer}>
      <LessonTitle title="Նոր դասընթաց" />
      <FormProvider {...methods}>
        <div className={styles.content}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            action=""
          >
            <div className={styles.form_content}>
              <div className={styles.box}>
                {navigation.state === "loading" ? (
                  <p>Loading...</p>
                ) : (
                  <CstmInput
                    placeholder="Դասընթացի վերնագիրը*"
                    onChange={(e) => console.log(e.currentTarget.form)}
                    regName="title"
                  />
                )}
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
              {/* <CustomBtn title="Watch" onClick={() => console.log(watch())} /> */}
            </div>
          </form>
        </div>
      </FormProvider>
    </div>
  );
};

const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const formData = toObject(data);
  console.log(formData);
  return redirect("/teacher/new_lesson");
};

const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let title = url.searchParams.get("title");
  return { title };
};
export const NewLesson = Object.assign(NewLessonComp, { loader, action });
