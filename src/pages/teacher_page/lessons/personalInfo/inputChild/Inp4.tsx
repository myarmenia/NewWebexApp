import React from "react";
import styles from "./inputChild.module.css";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import deleteImg from "../../../../../assets/teacher_images/discount/delete.svg";
import { useFormContext } from "react-hook-form";
import {
  inputChildProps,
  PersonalSubmitForm,
} from "../../../../../validations/teacherInfo_schema";
import { CstmInput } from "../../../../../components/forms";

export const Inp4: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
  const {
    formState: { errors },
  } = useFormContext<PersonalSubmitForm>();

  return (
    <div className={styles.inputChild}>
      <div className="font-semibold text-gray text-sm">Լեզուներ</div>
      {fieldArray.fields.map(({ id }, index) => {
        return (
          <div key={id} className={styles.inputChild3}>
            <CstmInput
              className={styles.name}
              placeholder="Հայերեն"
              regName={`${regName}.${index}.language`}
            />
            <img
              src={deleteImg}
              className={styles.deleteImg}
              onClick={() => fieldArray.remove(index)}
            />
          </div>
        );
      })}
      <div className={styles.buttonContainer}>
        <button
          // className="add"
          type="button"
        >
          <img
            src={buttonImg}
            onClick={() => {
              fieldArray.append({});
            }}
          />
        </button>
        <div className={styles.addText}>Ավելացնել</div>
      </div>
    </div>
  );
};
