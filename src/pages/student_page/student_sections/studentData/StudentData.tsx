import { FC } from "react";
import "./studentData.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import buttonImg from "../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import deleteImg from "../../../../assets/teacher_images/discount/delete.svg";
import { CstmInput, CustomBtn } from "../../../../components/forms";
import { LessonTitle } from "../../../../components/reusable";
import AddImg from "../../../../components/teacherComponents/sherid/addImg/AddImg";
import { studentData_schema } from "../../../../validations/studentData_schema";

interface IPersonalInfoProps {
  adress: string;
  phoneNum: string;
}
interface ILanguageProps {
  name: string;
}
interface IStudentData {
  imgSrc: string;
  personalInfo: IPersonalInfoProps[];
  language: ILanguageProps[];
}
export const StudentData: FC = () => {
  const methods = useForm<IStudentData>({
    resolver: yupResolver(studentData_schema),
    defaultValues: {
      language: [{ name: "" }],
      personalInfo: [{ adress: "", phoneNum: "" }],
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  const personalInfo = useFieldArray({
    control,
    name: "personalInfo",
  });
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
              {personalInfo.fields.map(({ id }, index) => {
                const adressError =
                  errors.personalInfo &&
                  errors.personalInfo[index]?.adress?.message;
                const phoneNumError =
                  errors.personalInfo &&
                  errors.personalInfo[index]?.phoneNum?.message;
                return (
                  <div key={id} className="studentDataInp">
                    <CstmInput
                      placeholder="Հասցե"
                      regName={`personalInfo.${index}.adress`}
                      error={adressError}
                    />
                    <CstmInput
                      placeholder="Հեռախոս"
                      regName={`personalInfo.${index}.phoneNum`}
                      error={phoneNumError}
                    />
                  </div>
                );
              })}
              <div className="buttonContainer">
                <button
                  type="button"
                  className="add"
                  onClick={() => {
                    personalInfo.append({
                      adress: "",
                      phoneNum: "",
                    });
                  }}
                >
                  <img src={buttonImg} />
                </button>
                <div className="addText">Ավելացնել</div>
              </div>
            </div>

            <div className="studentDataChild">
              <div className="studentDataTitle">Լեզուներ</div>
              {language.fields.map(({ id }, index) => {
                const languageError =
                  errors.language && errors.language[index]?.name?.message;
                return (
                  <div className="studentDataInp2" key={id}>
                    <CstmInput
                      className="studentDataInp2"
                      placeholder="Հայերեն"
                      regName={`language.${index}.name`}
                      error={languageError}
                    />
                    <img
                      src={deleteImg}
                      className="deleteImg"
                      onClick={() => language.remove(index)}
                    />
                  </div>
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
