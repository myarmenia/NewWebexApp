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
import { SubmitBtn } from "../../../lesComponents/submitBtn/SubmitBtn";
import { AttachFile } from "../../../lesComponents/attachFile/AttachFile";

interface EditMyLessonsProps {
  title: string;
  inp1: string;
  inp2: string;
  inp3: string;
  inp4: string;
  lesItems: IExtraMats[];
  homeItmes: IExtraMats[];
}

export const EditMyLessons: FC<EditMyLessonsProps> = ({
  title,
  inp1,
  inp2,
  inp3,
  inp4,
  lesItems,
  homeItmes,
}) => {
  const methods = useForm<IEditSchema>({
    resolver: yupResolver(editSchema),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = methods;

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
              <div className="saveChanges">
                <span className="text-xs">Պահպանել</span>
                <img src={saveImg} alt="" className="h-[15px]" />
              </div>
            </div>
            <div className="inputContainer">
              <div className="lesSection">
                <CstmInput
                  type="text"
                  placeholder=""
                  value={inp1}
                  regName="title"
                  className="editP_input"
                />
                <CstmInput
                  type="text"
                  placeholder=""
                  value={inp2}
                  regName="videoSource"
                  className="editP_input"
                />
                <CstmTextarea
                  placeholder=""
                  value={inp3}
                  regName="description"
                  className="editP_input"
                />
                <div className="extraMaterials">
                  <p className="text-xs font-semibold">Հավելյալ նյութերը</p>
                  <div className="extMatItems">
                    {lesExtraMats.fields.map((field, i) => (
                      <div
                        className="flex w-[90px] justify-between items-start"
                        key={field.id}
                      >
                        <div className="extraMat">
                          <img src={fileImg} alt="" />
                          <span>
                            {i + 1}.{field.name}
                          </span>
                        </div>
                        <img
                          src={deleteMaterial}
                          alt=""
                          onClick={() => lesExtraMats.remove(i)}
                        />
                      </div>
                    ))}
                  </div>
                  <AttachFile title="" />
                </div>
              </div>
              <div className="homeSection">
                <p className="homeTitle">Տնային աշխատանք</p>
                <CstmInput
                  type="text"
                  placeholder=""
                  value={inp4}
                  className="editP_input"
                  regName="homeW_videoSource"
                />
                <CstmTextarea
                  placeholder=""
                  value={inp4}
                  className="editP_input"
                  regName="homeW_description"
                />
                <div className="extraMaterials">
                  <p className="text-xs font-semibold">Հավելյալ նյութերը</p>
                  <div className="extMatItems">
                    {homeExtraMats.fields.map((field, i) => (
                      <div
                        className="flex w-[90px] justify-between items-start"
                        key={field.id}
                      >
                        <div className="extraMat">
                          <img src={fileImg} alt="" />
                          <span>
                            {i + 1}.{field.name}
                          </span>
                        </div>
                        <img
                          src={deleteMaterial}
                          alt=""
                          onClick={() => lesExtraMats.remove(i)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <AttachFile title=""/>
              </div>
            </div>
          </LesContainer>
        </div>
      </form>
    </FormProvider>
  );
};
