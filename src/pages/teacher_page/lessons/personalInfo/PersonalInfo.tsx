import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
// import { InputChild } from "./inputChild/InputChild";
import { LessonTitle } from "../../../../components/screenComponents/lessonTitle/LessonTitle";
import { CstmInput } from "../../../../components/teacherComponents/cstmInput/CstmInput";
import { CstmTextarea } from "../../../../components/teacherComponents/cstmTextarea/CstmTextarea";
import { CustomBtn } from "../../../../components/teacherComponents/customBtn/CustomBtn";
import AddImg from "../../../../components/teacherComponents/sherid/addImg/AddImg";
import { Inp2 } from "./inputChild/Inp2";
import { Inp3 } from "./inputChild/Inp3";
import Inp4 from "./inputChild/Inp4";
import Inp5 from "./inputChild/Inp5";
import Sertificat from "./inputChild/Sertificat";
import { personalInfoValidation, PersonalSubmitForm } from "./InterfacePerson";
import "./personalInfo.css";

const PersonalInfo = () => {
  const methods = useForm<PersonalSubmitForm>({
    resolver: yupResolver(personalInfoValidation),
    defaultValues: {
      img: "",
      adress: "",
      tel: "",
      aboutme: "",
      workattempt: [
        {
          select: "",
          company: "",
          position: "",
          acceptTerms: false,
          start: "",
          end: "",
          description: "",
        },
      ],
      education: [
        {
          select2: "",
          statement: "",
          faculty: "",
          profession: "",
          start: "",
          end: "",
        },
      ],
      languages: [{}],
      additionaledu: [
        {
          name: "",
          company: "",
          profession: "",
          start: "",
          end: "",
        },
      ],
      sertificat: "",
    },
  });
  const { handleSubmit, control, register, watch } = methods;
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
      <LessonTitle title="Անձնական տվյալներ" />
      <FormProvider {...methods}>
        <form className="personalInfo" onSubmit={handleSubmit(onSubmit)}>
          <AddImg />
          <div className="personalInfoChild">
            <div className="inputChild">
              <div className="inputChild2">
                <div className="font-semibold text-gray text-sm">
                  Անձնական տվյալներ
                </div>
                <CstmInput
                  type="text"
                  className="name"
                  placeholder="Հասցե"
                  regName="adress"
                />
                <CstmInput
                  type="text"
                  className="name"
                  placeholder="Հեռախոս"
                  regName="tel"
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-gray text-sm">Իմ մասին</p>
                <CstmTextarea
                  placeholder="Նկարագիր"
                  className="!h-[287px]"
                  regName="aboutme"
                />
              </div>
              <Inp2
                selectName="select"
                option={["chka", "sadd", "asd", "klka"]}
                regName="workattempt"
                fieldArray={workattempt}
              />
            </div>
            <div className="inputChild2">
              <Inp3
                selectName="select2"
                option={["asas", "sadd", "asd", "klka"]}
                regName="education"
                fieldArray={education}
              />
              <Inp4 regName="languages" fieldArray={languages} />
              <Inp5 regName="additionaledu" fieldArray={additionaledu} />
              <Sertificat />
            </div>
          </div>
          <div className="buttonSave">
            <CustomBtn type="submit" title="Պահպանել" />
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default PersonalInfo;
