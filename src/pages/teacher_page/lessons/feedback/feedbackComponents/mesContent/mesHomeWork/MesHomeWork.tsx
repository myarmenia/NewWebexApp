import React, { FC, useState } from "react";
import "./mesHomeWork.css";
import { ExtraMaterials } from "../../../../userLessons/stageLesPage/extraMaterials/ExtraMaterials";
import { LesContainer } from "../../../../userLessons/userLesComponents/lesContainer/LesContainer";
import { StudentsWork } from "./StudentsWork";
import { useLoaderData, useParams } from "react-router";
import { IOtherLessonLoaderData } from "../../../../../../../models/interfaces";
import { CstmInput } from "../../../../../../../components/forms";
import { FormProvider, useForm } from "react-hook-form";
import { CustomBtn } from "../../../../../../../components/forms";

export const MesHomeWork: FC = () => {
  const [isHomeWorkAccepted, setIsHomeWorkAccepted] = useState(false);
  const { data, params } = useLoaderData() as IOtherLessonLoaderData;
  const { body } = data[params.id - 1];

  // const params = useParams();
  // const {
  //   feedbackArr: { messages },
  // } = useSelector(lessonsSelectorFN);
  // const currentObj = messages[+params.id! - 1];
  // const { body } = currentObj;

  const formMethods = useForm<{ studnet_rate: string }>({
    defaultValues: {
      studnet_rate: "",
    },
  });
  return (
    <FormProvider {...formMethods}>
      <div className="messageCont_cont mesHomeWork_container">
        <div className="bg-white rounded-[15px]">
          <LesContainer className="cont01">
            <p className="hover:opacity-75 border-b border-[#BEBFE4] text-[10px] font-semibold pb-4">
              Տնային աշխատանք
            </p>
            <p className="text-xs">{body}</p>
            <div className="w-[30%] h-[1px] bg-[#BEBFE4]" />
            <ExtraMaterials items={["png", "img", "docx"]} />
          </LesContainer>
        </div>
        <div className="flex flex-col ">
          <div className="student_homeW_container">
            <div className="flex gap-[22px] flex-col w-[300px] justify-between my-8">
              <StudentsWork />
              <StudentsWork />
            </div>
          </div>
          {isHomeWorkAccepted ? (
            <form
              onSubmit={formMethods.handleSubmit((data) => console.log(data))}
              action=""
              className="flex flex-col gap-4"
            >
              <CstmInput
                className="!w-[193px]"
                placeholder="Գնահատել ուսանողին"
                type="text"
                regName="studnet_rate"
              />
              <CustomBtn type="submit" title="Հաստատել" />
            </form>
          ) : (
            <div className="flex items-center gap-4">
              <CustomBtn
                type="button"
                title="Ընդունել աշխատանքը"
                onClick={() => setIsHomeWorkAccepted(true)}
              />
              <CustomBtn type="button" title="Չընդունել" className="grayBtn" />
            </div>
          )}
        </div>
      </div>
    </FormProvider>
  );
};
