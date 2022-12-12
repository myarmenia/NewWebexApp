import React from "react";
import AddImg from "../../sherid/addImg/AddImg";
import { LessonTitle } from "../lessonTitle/LessonTitle";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useForm,
  useWatch,
  Control,
  FormProvider,
  useFieldArray,
} from "react-hook-form";
// import { InputChild } from "./inputChild/InputChild";
import { PersonalSubmitForm, validationSchema } from "./InterfacePerson";
import "./personalInfo.css";
import Inp from "./inputChild/Inp";
import { Inp2 } from "./inputChild/Inp2";
import { Inp3 } from "./inputChild/Inp3";
import Inp4 from "./inputChild/Inp4";
import Inp5 from "./inputChild/Inp5";
import Sertificat from "./inputChild/Sertificat";

const PersonalInfo = () => {
  const methods = useForm<PersonalSubmitForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      img: "",
      adress: "",
      tel: "",
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
    console.log(data, "data");
    console.log(watch());
  };
  console.log(watch());
  return (
    <>
      <LessonTitle title="Անձնական տվյալներ" />
      <FormProvider {...methods}>
        <form className="personalInfo" onSubmit={handleSubmit(onSubmit)}>
          <AddImg />
          <div className="personalInfoChild">
            <div className="inputChild">
              <Inp />
              <Inp2
                selectName="select"
                option={["chka", "sadd", "asd", "klka"]}
                regName="workattempt"
                fieldArray={workattempt}
              />
              <Inp3
                selectName="select2"
                option={["asas", "sadd", "asd", "klka"]}
                regName="education"
                fieldArray={education}
              />
            </div>
            <div className="inputChild2">
              <Inp4 regName="languages" fieldArray={languages} />
              <Inp5 regName="additionaledu" fieldArray={additionaledu} />
              <Sertificat />
            </div>
          </div>
          <div className="buttonSave">
            <button type="submit">Պահպանել</button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default PersonalInfo;
