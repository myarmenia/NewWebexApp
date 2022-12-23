import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import AddImg from "../../sherid/addImg/AddImg";
import { LessonTitle } from "../../teacher/lessonTitle/LessonTitle";
import * as Yup from "yup";
import {
  FormProvider,
  useFieldArray,
  UseFieldArrayProps,
  UseFieldArrayReturn,
  useForm,
} from "react-hook-form";
import buttonImg from "../../../images/createGraffic/buttonimg.svg";
import "./studentData.css";
import { CstmInput } from "../../teacher/lesComponents/cstmInput/CstmInput";
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
  address: Yup.string(),
  phoneNum: Yup.string(),
  language: Yup.array().of(Yup.object()),
});
export const StudentData = () => {
  const methods = useForm<IStudentData>({
    resolver: yupResolver(StudentDataYup),
    defaultValues: {
      //   imgSrc: "",
      //   adress: "",
      //   phoneNum: "",
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
              <input
                className="studentDataInp"
                placeholder="Հասցե"
                {...register("adress")}
              />
              <input
                className="studentDataInp"
                placeholder="Հեռախոս"
                {...register("phoneNum")}
              />
            </div>
            <div className="studentDataChild">
              <div className="studentDataTitle">Լեզուներ</div>
              {language.fields.map(({ id }, index) => {
                return (
                  <input
                    className="studentDataInp"
                    placeholder="Հայերեն"
                    key={id}
                    {...register(`language.${index}.name`)}
                  />
                );
              })}
              <div className="buttonContainer">
                <button
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
          <button type="submit" className="studentDataBtn">
            Ուղարկել
          </button>
        </form>
      </div>
    </FormProvider>
  );
};
