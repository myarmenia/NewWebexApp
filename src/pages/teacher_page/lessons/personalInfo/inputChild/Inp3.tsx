import React from "react";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import {
  CstmDateInput,
  CstmInput,
  CustomSelect
} from "../../../../../components/forms";
import {
  inputChildProps
} from "../../../../../validations/teacherInfo_schema";
import styles from "./inputChild.module.css";

export const Inp3: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
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
                <CstmDateInput regName={`additionaledu.${index}.start`} />
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
