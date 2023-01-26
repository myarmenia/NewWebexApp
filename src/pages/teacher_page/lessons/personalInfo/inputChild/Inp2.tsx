import React from "react";
import { useFormContext } from "react-hook-form";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import {
  CstmDateInput,
  CstmInput,
  CstmTextarea,
  CustomCheckbox,
  CustomSelect,
} from "../../../../../components/forms";
import {
  inputChildProps,
  PersonalSubmitForm,
} from "../../../../../validations/teacherInfo_schema";
import styles from "./inputChild.module.css";
export const Inp2: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
  const {
    formState: { errors },
  } = useFormContext<PersonalSubmitForm>();

  return (
    <div className={styles.inputChild}>
      <div className="font-semibold text-gray text-sm">Աշխատանքային փորձ</div>
      {fieldArray.fields.map(({ id }, index) => {
        return (
          <div className={styles.inputChild2} key={id}>
            <CstmInput
              placeholder="Կազմակերպություն"
              regName={`${regName}.${index}.company`}
            />
            <CustomSelect
              placeholder="adfsd"
              regName={`${regName}.${index}.select`}
              options={["chka", "sadd", "asd", "klka"]}
            />
            <CstmInput
              className={styles.name}
              placeholder="Պաշտոն"
              regName={`${regName}.${index}.position`}
            />
            <div className={styles.dateValidation}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxText}>Ժամանակահատված</div>
                {/* <div className={styles.checkboxChild}>
                  <input
                    type="checkbox"
                    {...register(`workattempt.${index}.acceptTerms`)}
                  />
                  <div className={styles.clickText}>ներկայումս</div>
                </div> */}
                {/* Rub es ete petq chi - jnji */}
                <CustomCheckbox
                  regName={`workattempt.${index}.acceptTerms`}
                  label="ներկայումս"
                />
              </div>
              <div className={styles.date}>
                {/* <input
                  type="date"
                  className={styles.dateInp}
                  {...register(`workattempt.${index}.start`)}
                /> */}
                <CstmDateInput
                  regName={`workattempt.${index}.start`}
                  defaultValue={"01.01.2023"}
                />
                <div className="w-2 h-[1px] bg-[#CCCCCC]"></div>
                <CstmDateInput regName={`workattempt.${index}.end`} />
                {/*<input
                  type="date"
                  className={styles.dateInp}
                  {...register(`workattempt.${index}.end`)}
                /> */}
              </div>
            </div>
            <CstmTextarea
              placeholder="Աշխատանքի նկարագրություն"
              regName={`workattempt.${index}.description`}
            />
          </div>
        );
      })}
      <div className={styles.buttonContainer}>
        <button
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
