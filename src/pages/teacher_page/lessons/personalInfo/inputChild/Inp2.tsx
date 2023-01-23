import React from "react";
import { useFormContext } from "react-hook-form";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import { CstmInput } from "../../../../../components/forms";
import { CstmTextarea } from "../../../../../components/forms";
import { CustomSelect } from "../../../../../components/forms";
import {
  inputChildProps,
  PersonalSubmitForm,
} from "../../../../../validations/teacherInfo_schema";
import styles from "./inputChild.module.css";
export const Inp2: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<PersonalSubmitForm>();
  return (
    <div className={styles.inputChild}>
      <div className="font-semibold text-gray text-sm">Աշխատանքային փորձ</div>
      {fieldArray.fields.map(({ id }, index) => {
        const descriptionError =
          errors.workattempt && errors.workattempt[index]?.description?.message;
        const selectError =
          errors.workattempt && errors.workattempt[index]?.select?.message;
        const companyError =
          errors.workattempt && errors.workattempt[index]?.company?.message;
        const positionError =
          errors.workattempt && errors.workattempt[index]?.position?.message;
        return (
          <div className={styles.inputChild2} key={id}>
            <CstmInput
              placeholder="Կազմակերպություն"
              regName={`${regName}.${index}.company`}
              error={companyError}
            />
            <CustomSelect
              placeholder="adfsd"
              regName={`${regName}.${index}.select`}
              // className="registration_select"
              options={["chka", "sadd", "asd", "klka"]}
              error={selectError}
            />
            <CstmInput
              className={styles.name}
              placeholder="Պաշտոն"
              regName={`${regName}.${index}.position`}
              error={positionError}
            />
            <div className={styles.dateValidation}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxText}>Ժամանակահատված</div>
                <div className={styles.checkboxChild}>
                  <input
                    type="checkbox"
                    {...register(`workattempt.${index}.acceptTerms`)}
                  />
                  <div className={styles.clickText}>ներկայումս</div>
                </div>
              </div>
              <div className={styles.date}>
                <input
                  type="date"
                  className={styles.dateInp}
                  {...register(`workattempt.${index}.start`)}
                />
                <div className="gic"></div>
                <input
                  type="date"
                  className={styles.dateInp}
                  {...register(`workattempt.${index}.end`)}
                />
              </div>
            </div>
            <CstmTextarea
              placeholder="Աշխատանքի նկարագրություն"
              error={descriptionError}
              regName={`workattempt.${index}.description`}
            />
          </div>
        );
      })}
      <div className={styles.buttonContainer}>
        <button
          // className="add"

          type="button"
          onClick={() => {
            fieldArray.append({
              select: "",
              company: "",
              position: "",
              acceptTerms: false,
              start: "",
              end: "",
              description: "",
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
