import { FC } from "react";
import styles from "./studentData.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import buttonImg from "../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import deleteImg from "../../../../assets/teacher_images/discount/delete.svg";
import { CstmInput, CustomBtn } from "../../../../components/forms";
import { LessonTitle, ImagePicker } from "../../../../components/reusable";
import {
  IStudentData,
  studentData_schema,
} from "../../../../validations/studentData_schema";

export const StudentData: FC = () => {
  const methods = useForm<IStudentData>({
    resolver: yupResolver(studentData_schema),
    defaultValues: {
      language: [{ name: "" }],
      // personalInfo: [{ adress: "", phoneNum: "" }],
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  // const personalInfo = useFieldArray({
  //   control,
  //   name: "personalInfo",
  // });
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
      <div className={styles.studentData}>
        <ImagePicker />
        <form
          className={styles.studentDataForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.studentDataFormChild}>
            <div className={styles.studentDataChild}>
              <div className={styles.studentDataTitle}>Անձնական տվյալներ</div>
              {/* {personalInfo.fields.map(({ id }, index) => {
                return (
                  <div key={id} className={styles.studentDataInp}>
                    <CstmInput
                      placeholder="Հասցե"
                      regName={`personalInfo.${index}.adress`}
                    />
                    <CstmInput
                      placeholder="Հեռախոս"
                      regName={`personalInfo.${index}.phoneNum`}
                    />
                  </div>
                );
              })} */}
              <div className={styles.studentDataInp}>
                <CstmInput placeholder="Հասցե" regName="adress" />
                <CstmInput
                  placeholder="Հեռախոս"
                  type="number"
                  regName="phoneNum"
                />
                <CstmInput placeholder="Տարիք" type="number" regName="age" />
              </div>
              {/* <div className={styles.buttonContainer}>
                <button
                  type="button"
                  // className="add"
                  onClick={() => {
                    personalInfo.append({
                      adress: "",
                      phoneNum: "",
                    });
                  }}
                >
                  <img src={buttonImg} />
                </button>
                <div className={styles.addText}>Ավելացնել</div>
              </div> */}
            </div>

            <div className={styles.studentDataChild}>
              <div className={styles.studentDataTitle}>Լեզուներ</div>
              {language.fields.map(({ id }, index) => {
                return (
                  <div className={styles.studentDataInp2} key={id}>
                    <CstmInput
                      className={styles.studentDataInp2}
                      placeholder="Հայերեն"
                      regName={`language.${index}.name`}
                    />
                    <img
                      src={deleteImg}
                      // className="deleteImg"
                      onClick={() => language.remove(index)}
                    />
                  </div>
                );
              })}
              <div className={styles.buttonContainer}>
                <button
                  type="button"
                  // className="add"
                  onClick={() => {
                    language.append({
                      name: "",
                    });
                  }}
                >
                  <img src={buttonImg} />
                </button>
                <div className={styles.addText}>Ավելացնել</div>
              </div>
            </div>
          </div>
          <CustomBtn type="submit" title="Ուղարկել" />
        </form>
      </div>
    </FormProvider>
  );
};
