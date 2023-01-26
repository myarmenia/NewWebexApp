import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import deleteImg from "../../../../../assets/teacher_images/discount/delete.svg";
import { CstmInput } from "../../../../../components/forms";
import { PersonalSubmitForm } from "../../../../../validations/teacherInfo_schema";
import styles from "./inputChild.module.css";

export const Inp4: FC = () => {
  const { control } = useFormContext<PersonalSubmitForm>();

  const { append, fields, remove } = useFieldArray({
    control,
    name: "languages",
  });

  return (
    <div className={styles.inputChild}>
      <div className="font-semibold text-gray text-sm">Լեզուներ</div>
      {fields.map(({ id }, index) => {
        return (
          <div key={id} className={styles.inputChild3}>
            <CstmInput
              className={styles.name}
              placeholder="Հայերեն"
              regName={`languages.${index}.language`}
            />
            <img
              src={deleteImg}
              className={styles.deleteImg}
              onClick={() => remove(index)}
            />
          </div>
        );
      })}
      <div className={styles.buttonContainer}>
        <button type="button">
          <img
            src={buttonImg}
            onClick={() => {
              append({ language: "" });
            }}
          />
        </button>
        <div className={styles.addText}>Ավելացնել</div>
      </div>
    </div>
  );
};
