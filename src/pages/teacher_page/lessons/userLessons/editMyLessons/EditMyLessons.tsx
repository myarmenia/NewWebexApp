import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import saveImg from "../../../../../assets/teacher_images/newLesson/acceptPurple.svg";
import { CstmInput, CstmTextarea } from "../../../../../components/forms";
import { ILessonLoaderData } from "../../../../../models/interfaces";
import {
  editLesson_schema,
  IEditSchema,
  IExtraMats,
} from "../../../../../validations/editLesson_schema";
import { LesContainer } from "../userLesComponents/LesContainer";
import "./editMyLessons.css";
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
  // ------ Loader data -----
  const { obj, lessonsObj, paramsLes } = useLoaderData() as ILessonLoaderData;
  const { title } = obj;
  const { body } = lessonsObj[paramsLes - 1];

  const methods = useForm<IEditSchema>({
    resolver: yupResolver(editLesson_schema),
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
                  defaultValue={body}
                  regName="title"
                  className="editP_input min-h-[200px]"
                />
                <CstmInput
                  defaultValue={inp2}
                  regName="videoSource"
                  className="editP_input"
                />
                <CstmTextarea
                  defaultValue={inp3}
                  regName="description"
                  className="editP_input"
                />
                <ExtraMats extraMats={lesExtraMats} />
              </div>
              <div className="homeSection">
                <p className="homeTitle">Տնային աշխատանք</p>
                <CstmInput
                  defaultValue={inp4}
                  className="editP_input"
                  regName="homeW_videoSource"
                />
                <CstmTextarea
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
