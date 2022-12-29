import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import * as Yup from "yup";
import {
  FormProvider,
  useFieldArray,
  UseFieldArrayProps,
  UseFieldArrayReturn,
  useForm,
} from "react-hook-form";
import buttonImg from "../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import "./studentData.css";
import { LessonTitle } from "../../../../components/reusable/lessonTitle/LessonTitle";
import AddImg from "../../../../components/teacherComponents/sherid/addImg/AddImg";
import { CstmInput } from "../../../../components/forms/cstmInput/CstmInput";
import { CustomBtn } from "../../../../components/forms/customBtn/CustomBtn";

interface ILanguageProps {
  name: string;
}
interface IStudentData {
  imgSrc: string;
  adress: string;
  phoneNum: string;
  language: ILanguageProps[];
}
export const StudentDataYup = Yup.object().shape({
  imgSrc: Yup.string(),
  adress: Yup.string().required("Լրացնելը պարտադիր է"),
  phoneNum: Yup.string().required("Լրացնելը պարտադիր է"),
  language: Yup.array().of(Yup.object()).required("Լրացնելը պարտադիր է"),
});
export const StudentData = () => {
  const methods = useForm<IStudentData>({
    resolver: yupResolver(StudentDataYup),
    defaultValues: {
      language: [{ name: "" }],
    },
  });

  const { handleSubmit, control, register, watch } = methods;
  const language = useFieldArray({
    control,
    name: "language",
  });
  const onSubmit = (data: IStudentData) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <LessonTitle title="Անձնական տվյալներ" />
      <div className="studentData">
        <AddImg />
        <form className="studentDataForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="studentDataFormChild">
            <div className="studentDataChild">
              <div className="studentDataTitle">Անձնական տվյալներ</div>
              <CstmInput placeholder="Հասցե" type="text" regName="adress" />
              <CstmInput placeholder="Հեռախոս" type="text" regName="phoneNum" />
            </div>
            <div className="studentDataChild">
              <div className="studentDataTitle">Լեզուներ</div>
              {language.fields.map(({ id, name }, index) => {
                return (
                  <CstmInput
                    className="studentDataInp"
                    placeholder="Հայերեն"
                    type="text"
                    key={id}
                    regName={`language.${index}.name`}
                  />
                );
              })}
              <div className="buttonContainer">
                <button
                  type="button"
                  className="add"
                  onClick={() => {
                    language.append({
                      name: "",
                    });
                  }}
                >
                  <img src={buttonImg} />
                </button>
                <div className="addText">Ավելացնել</div>
              </div>
            </div>
          </div>
          <CustomBtn type="submit" title="Ուղարկել" />
        </form>
      </div>
    </FormProvider>
  );
};
