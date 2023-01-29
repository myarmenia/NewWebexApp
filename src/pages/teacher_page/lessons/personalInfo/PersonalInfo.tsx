import styles from "./personalInfo.module.css";
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
import { AttachFile } from "../../../../components/reusable/attachFile/AttachFile";

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

  const onSubmit = (data: PersonalSubmitForm) => {
    console.log(data);
  };

  return (
    <>
      <LessonTitle title="Անձնական տվյալներ" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.personalInfo}>
          <AddImg />
          <div className={styles.personalInfoChild}>
            <div className={styles.inputChild}>
              <div className={styles.inputChild2}>
                <div className="font-semibold text-gray text-sm">
                  Անձնական տվյալներ
                </div>
                <CstmInput placeholder="Հասցե" regName="address" />
                <CstmInput placeholder="Հեռախոս" regName="tel" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-gray text-sm">Իմ մասին</p>
                <CstmTextarea
                  placeholder="Նկարագիր"
                  className="!h-[287px]"
                  regName="aboutme"
                />
              </div>
              <Inp2 />
            </div>
            <div className={styles.inputChild2}>
              <Inp3 />
              <Inp4 />
              <Inp5 />
              <AttachFile
                regName="sertificat"
                title="Սերտիֆիկատ"
                titleClName="!text-sm"
                label="Բեռնել ֆայլը"
              />
            </div>
          </div>
          <div className={styles.buttonSave}>
            <CustomBtn type="submit" title="Պահպանել" />
          </div>
        </form>
      </FormProvider>
    </>
  );
};
