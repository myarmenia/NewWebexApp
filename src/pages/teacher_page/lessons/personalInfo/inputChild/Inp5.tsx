import React, { FC } from "react";
import styles from "./inputChild.module.css";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
  inputChildProps,
  PersonalSubmitForm,
} from "../../../../../validations/teacherInfo_schema";
import { CstmDateInput, CstmInput } from "../../../../../components/forms";

export const Inp5: FC<inputChildProps> = () => {
  const { control } = useFormContext<PersonalSubmitForm>();
  const { append, fields } = useFieldArray({
    control,
    name: "additionaledu",
  });
  return (
    <div className={styles.inputChild}>
      <div className="font-semibold text-gray text-sm">Հավելյալ կրթություն</div>
      {fields.map(({ id }, index) => {
        return (
          <div className={styles.inputChild2} key={id}>
            <CstmInput
              placeholder="Դասընթացի անվանումը"
              regName={`additionaledu.${index}.name`}
            />
            <CstmInput
              placeholder="Դասընթացն անցկացնող կազմակերպություն"
              regName={`additionaledu.${index}.company`}
            />
            <CstmInput
              regName={`additionaledu.${index}.profession`}
              placeholder="Մասնագիտություն"
            />

            <div className={styles.dateValidation}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxText}>
                  Ուսումնառության ժամանակահատված
                </div>
              </div>
              <div className={styles.date}>
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
      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            append({
              name: "",
              company: "",
              profession: "",
              start: "",
              end: "",
            });
          }}
          type="button"
        >
          <img src={buttonImg} />
        </button>
        <div className={styles.addText}>Ավելացնել</div>
      </div>
    </div>
  );
};
