import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
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

export const Inp3: FC<inputChildProps> = () => {
  const { control } = useFormContext<PersonalSubmitForm>();
  const { append, fields } = useFieldArray({
    control,
    name: "education",
  });
  return (
    <div className={styles.inputChild}>
      <div className="font-semibold text-gray text-sm">Կրթություն</div>
      {fields.map(({ id }, index) => {
        return (
          <div className={styles.inputChild2} key={id}>
            <CustomSelect
              placeholder="adsfdsf"
              regName={`education.${index}.select2`}
              className="registration_select"
              options={["asas", "sadd", "asd", "klka"]}
            />
            <CstmInput
              placeholder="Ուսումնական հաստատություն"
              regName={`education.${index}.statement`}
            />
            <CstmInput
              placeholder="Ֆակուլտետ"
              regName={`education.${index}.faculty`}
            />
            <CstmInput
              placeholder="Մասնագիտություն"
              regName={`education.${index}.profession`}
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
            append({
              select2: "",
              statement: "",
              faculty: "",
              profession: "",
              start: "",
              end: "",
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
