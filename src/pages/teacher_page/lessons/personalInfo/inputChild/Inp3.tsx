import React from "react";
import { useFormContext } from "react-hook-form";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import {
  CstmDateInput,
  CstmInput,
  CustomSelect,
} from "../../../../../components/forms";
import {
  inputChildProps,
  PersonalSubmitForm,
} from "../../../../../validations/teacherInfo_schema";
import styles from "./inputChild.module.css";

export const Inp3: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PersonalSubmitForm>();

  return (
    <div className={styles.inputChild}>
      <div className="font-semibold text-gray text-sm">Կրթություն</div>
      {fieldArray.fields.map(({ id }, index) => {
        return (
          <div className={styles.inputChild2} key={id}>
            <CustomSelect
              placeholder="adsfdsf"
              regName={`${regName}.${index}.select2`}
              className="registration_select"
              options={["asas", "sadd", "asd", "klka"]}
            />
            <CstmInput
              placeholder="Ուսումնական հաստատություն"
              regName={`${regName}.${index}.statement`}
            />
            <CstmInput
              placeholder="Ֆակուլտետ"
              regName={`${regName}.${index}.faculty`}
            />
            <CstmInput
              placeholder="Մասնագիտություն"
              regName={`${regName}.${index}.profession`}
            />
            <div className={styles.dateValidation}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxText}>
                  Ուսումնառության ժամանակահատված
                </div>
              </div>
              <div className={styles.date}>
                {/* <input
                  type="date"
                  className={styles.dateInp}
                  {...register(`education.${index}.start`)}
                />
                <div className={styles.gic}></div>
                <input
                  type="date"
                  className={styles.dateInp}
                  {...register(`education.${index}.end`)}
                /> */}
                <CstmDateInput
                  regName={`additionaledu.${index}.start`}
                  defaultValue={"01.01.2023"}
                />
                <div className="w-2 h-[1px] bg-[#CCCCCC]" />
                <CstmDateInput regName={`additionaledu.${index}.end`} />
              </div>
            </div>
          </div>
        );
      })}
      <div className="buttonContainer">
        <button
          // className="add"
          type="button"
          onClick={() => {
            fieldArray.append({
              select2: "",
              statement: "",
              faculty: "",
              profession: "",
              start: "",
              end: "",
            });
          }}
        >
          <img src={buttonImg} />
        </button>
        <div className={styles.addText}>Ավելացնել</div>
      </div>
    </div>
  );
};
