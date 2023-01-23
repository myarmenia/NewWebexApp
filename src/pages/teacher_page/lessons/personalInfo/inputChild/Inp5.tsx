import React from "react";
import styles from "./inputChild.module.css";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import { useFormContext } from "react-hook-form";
import {
  inputChildProps,
  PersonalSubmitForm,
} from "../../../../../validations/teacherInfo_schema";
import { CstmInput } from "../../../../../components/forms";

export const Inp5: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PersonalSubmitForm>();
  return (
    <div className={styles.inputChild}>
      <div className="font-semibold text-gray text-sm">Հավելյալ կրթություն</div>
      {fieldArray.fields.map(({ id }, index) => {
        const additionaleduError =
          errors.additionaledu && errors.additionaledu[index]?.name?.message;
        const companyError =
          errors.additionaledu && errors.additionaledu[index]?.company?.message;
        const proffesionError =
          errors.additionaledu &&
          errors.additionaledu[index]?.profession?.message;
        return (
          <div className={styles.inputChild2} key={id}>
            <CstmInput
              placeholder="Դասընթացի անվանումը"
              regName={`${regName}.${index}.name`}
              error={additionaleduError}
            />
            <CstmInput
              placeholder="Դասընթացն անցկացնող կազմակերպություն"
              regName={`${regName}.${index}.company`}
              error={companyError}
            />
            <CstmInput
              regName={`${regName}.${index}.profession`}
              placeholder="Մասնագիտություն"
              error={proffesionError}
            />

            <div className={styles.dateValidation}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxText}>
                  Ուսումնառության ժամանակահատված
                </div>
              </div>
              <div className={styles.date}>
                <input
                  type="date"
                  className={styles.dateInp}
                  {...register(`additionaledu.${index}.start`)}
                />
                <div className="gic"></div>
                <input
                  type="date"
                  className={styles.dateInp}
                  {...register(`additionaledu.${index}.end`)}
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.buttonContainer}>
        <button
          // className="add"

          onClick={() => {
            fieldArray.append({
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
