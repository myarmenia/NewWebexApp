import "./personalInfo.css";
import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import {
  CstmInput,
  CstmTextarea,
  CustomBtn,
} from "../../../../components/forms";
import { LessonTitle } from "../../../../components/reusable";
import AddImg from "../../../../components/teacherComponents/sherid/addImg/AddImg";
import { Inp2 } from "./inputChild/Inp2";
import { Inp3 } from "./inputChild/Inp3";
import { Inp4 } from "./inputChild/Inp4";
import { Inp5 } from "./inputChild/Inp5";
import { Sertificat } from "./inputChild/Sertificat";
import {
  teacherInfo_schema,
  PersonalSubmitForm,
} from "../../../../validations/teacherInfo_schema";

export const PersonalInfo: FC = () => {
  const methods = useForm<PersonalSubmitForm>({
    resolver: yupResolver(teacherInfo_schema),
    defaultValues: {
      workattempt: [
        {
          select: "",
          company: "",
          position: "",
          acceptTerms: false,
          start: new Date(),
          end: new Date(),
          description: "",
        },
      ],
      education: [
        {
          select2: "",
          statement: "",
          faculty: "",
          profession: "",
          start: new Date(),
          end: new Date(),
        },
      ],
      languages: [{}],
      additionaledu: [
        {
          name: "",
          company: "",
          profession: "",
          start: new Date(),
          end: new Date(),
        },
      ],
    },
  });
  const { handleSubmit, control } = methods;
  const workattempt = useFieldArray({
    control,
    name: "workattempt",
  });
  const education = useFieldArray({
    control,
    name: "education",
  });
  const languages = useFieldArray({
    control,
    name: "languages",
  });
  const additionaledu = useFieldArray({
    control,
    name: "additionaledu",
  });
  const onSubmit = (data: PersonalSubmitForm) => {
    console.log(data);
  };

  return (
    <>
      <LessonTitle title="???????????????? ????????????????" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="personalInfo">
          <AddImg />
          <div className="personalInfoChild">
            <div className="inputChild">
              <div className="inputChild2">
                <div className="font-semibold text-gray text-sm">
                  ???????????????? ????????????????
                </div>
                <CstmInput placeholder="??????????" regName="address" />
                <CstmInput placeholder="??????????????" regName="tel" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-gray text-sm">???? ??????????</p>
                <CstmTextarea
                  placeholder="????????????????"
                  className="!h-[287px]"
                  regName="aboutme"
                />
              </div>
              <Inp2 regName="workattempt" fieldArray={workattempt} />
            </div>
            <div className="inputChild2">
              <Inp3 regName="education" fieldArray={education} />
              <Inp4 regName="languages" fieldArray={languages} />
              <Inp5 regName="additionaledu" fieldArray={additionaledu} />
              <Sertificat />
            </div>
          </div>
          <div className="buttonSave">
            <CustomBtn type="submit" title="????????????????" />
          </div>
        </form>
      </FormProvider>
    </>
  );
};
