import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import "./editMyLessons.css";
import saveImg from "../../../../../assets/teacher_images/newLesson/acceptPurple.svg";
import fileImg from "../../../../../assets/teacher_images/userLessons/Group 1701.svg";
import deleteMaterial from "../../../../../assets/teacher_images/exam/Group 1555.svg";
import { LesContainer } from "../userLesComponents/lesContainer/LesContainer";
import { FormProvider, useForm, useFieldArray } from "react-hook-form";
import { editSchema, IEditSchema, IExtraMats } from "./editSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router";
import { ILessonLoaderData } from "../../../../../models/interfaces";
import { ExtraMats } from "./editMyLessons_copns/ExtraMats";
import { CstmTextarea } from "../../../../../components/teacherComponents/cstmTextarea/CstmTextarea";
import { CstmInput } from "../../../../../components/teacherComponents/cstmInput/CstmInput";

interface EditMyLessonsProps {
  title?: string;
  inp1: string;
  inp2: string;
  inp3: string;
  inp4: string;
  lesItems: IExtraMats[];
  homeItmes: IExtraMats[];
}

export const EditMyLessons: FC<EditMyLessonsProps> = ({
  // title,
  inp1,
  inp2,
  inp3,
  inp4,
  lesItems,
  homeItmes,
}) => {
  // ------ Loader data -----
  const { obj, lessonsObj, paramsLes } = useLoaderData() as ILessonLoaderData;
  const { title } = obj;
  const { body } = lessonsObj[paramsLes - 1];

  // const params = useParams();
  // const {
  //   feedbackArr: { messages },
  // } = useSelector(lessonsSelectorFN);
  // const currentObj = messages[+params.id! - 1];
  // const { title, body } = currentObj;

  const methods = useForm<IEditSchema>({
    resolver: yupResolver(editSchema),
  });

  const { handleSubmit, setValue, control } = methods;

  const lesExtraMats = useFieldArray({ control, name: "extraMaterials" });
  const homeExtraMats = useFieldArray({
    control,
    name: "homeW_extraMaterials",
  });
  useEffect(() => {
    setValue("extraMaterials", lesItems);
    setValue("homeW_extraMaterials", homeItmes);
  }, []);
  const onSubmit = (data: IEditSchema) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="editMyLessons">
          <LesContainer className="editMyLessons_container">
            <div className="editMyLessons_titleBox">
              <div className="editMyLessons_title">{title}</div>
              <button className="saveChanges">
                <span className="text-xs">Պահպանել</span>
                <img src={saveImg} alt="" className="h-[15px]" />
              </button>
            </div>
            <div className="inputContainer">
              <div className="lesSection">
                <CstmTextarea
                  placeholder=""
                  defaultValue={body}
                  regName="title"
                  className="editP_input min-h-[200px]"
                />
                <CstmInput
                  type="text"
                  placeholder=""
                  defaultValue={inp2}
                  regName="videoSource"
                  className="editP_input"
                />
                <CstmTextarea
                  placeholder=""
                  defaultValue={inp3}
                  regName="description"
                  className="editP_input"
                />
                <ExtraMats extraMats={lesExtraMats} />
              </div>
              <div className="homeSection">
                <p className="homeTitle">Տնային աշխատանք</p>
                <CstmInput
                  type="text"
                  placeholder=""
                  defaultValue={inp4}
                  className="editP_input"
                  regName="homeW_videoSource"
                />
                <CstmTextarea
                  placeholder=""
                  defaultValue={inp4}
                  className="editP_input"
                  regName="homeW_description"
                />
                <ExtraMats homeExtraMats={homeExtraMats} />
              </div>
            </div>
          </LesContainer>
        </div>
      </form>
    </FormProvider>
  );
};
