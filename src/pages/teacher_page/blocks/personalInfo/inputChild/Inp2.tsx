import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
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
export const Inp2: FC<inputChildProps> = () => {
  const { control } = useFormContext<PersonalSubmitForm>();
  const { append, fields } = useFieldArray({
    control,
    name: "workattempt",
  });
  return (
    <div className={styles.inputChild}>
      <div className="font-semibold text-gray text-sm">Աշխատանքային փորձ</div>
      {fields.map(({ id }, index) => {
        return (
          <div className={styles.inputChild2} key={id}>
            <CstmInput
              placeholder="Կազմակերպություն"
              regName={`workattempt.${index}.company`}
            />
            <CustomSelect
              placeholder="adfsd"
              regName={`workattempt.${index}.select`}
              options={["chka", "sadd", "asd", "klka"]}
            />
            <CstmInput
              className={styles.name}
              placeholder="Պաշտոն"
              regName={`workattempt.${index}.position`}
            />
            <div className={styles.dateValidation}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxText}>Ժամանակահատված</div>
                <CustomCheckbox
                  regName={`workattempt.${index}.acceptTerms`}
                  label="ներկայումս"
                />
              </div>
              <div className={styles.date}>
                <CstmDateInput
                  regName={`workattempt.${index}.start`}
                  defaultValue={"01.01.2023"}
                />
                <div className="w-2 h-[1px] bg-[#CCCCCC]"></div>
                <CstmDateInput regName={`workattempt.${index}.end`} />
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
            append({
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
          <img src={buttonImg} alt="" />
        </button>
        <div className={styles.addText}>Ավելացնել</div>
      </div>
    </div>
  );
};
