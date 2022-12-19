import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import "./editMyLessons.css";
import saveImg from "../../../../../images/Teacher/NewLesson/acceptPurple.svg";
import { LesContainer } from "../userLesComponents/lesContainer/LesContainer";
import { CstmInput } from "../../../lesComponents/cstmInput/CstmInput";
import { CstmTextarea } from "../../../lesComponents/cstmTextarea/CstmTextarea";
import fileImg from "../../../../../images/Teacher/UserLessons/Group 1701.svg";
import deleteMaterial from "../../../../../images/Teacher/Exam/Group 1555.svg";
import { FormProvider, useForm, useFieldArray } from "react-hook-form";
import { editSchema, IEditSchema, IExtraMats } from "./editSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomBtn } from "../../../lesComponents/customBtn/CustomBtn";
import { AttachFile } from "../../../lesComponents/attachFile/AttachFile";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import { ILessonLoaderData } from "../../../../../models/interfaces";
import { ExtraMats } from "./editMyLessons_copns/ExtraMats";

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
  const { obj, lessonsObj, paramsLes } = useLoaderData() as ILessonLoaderData;
  const { title } = obj;
  const { body } = lessonsObj[paramsLes - 1];

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
          <div className="my_background_06" />
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
