import { FC } from "react";
import { FieldArrayWithId, useFormContext } from "react-hook-form";
import buttonImg from "../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import deleteIcon from "../../../../assets/teacher_images/createGraffic/delete.svg";
import { IInputTimeProps, UserSubmitForm2 } from "./CreateGraffic";
import styles from "./createGraffic.module.css";

interface InputProps {
  day: string;
  className?: string;
  placholder?: string;
  regName: string;
  count: number;
  fields: FieldArrayWithId<UserSubmitForm2, keyof UserSubmitForm2, "id">[];
  remove: (index?: number | number[] | undefined) => void;
  append: (value: IInputTimeProps | IInputTimeProps[]) => void;
}

export const InputTime: FC<InputProps> = ({
  day,
  placholder,
  append,
  fields,
  remove,
  regName,
  count,
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.graffics}>
      <p className={styles.grafficsDay}>{day}</p>
      <div className={styles.grafficInput}>
        {fields.map(({ id }, index) => {
          return (
            <div key={id}>
              <div className={styles.grafficInputChild}>
                <input
                  type="time"
                  // defaultValue={"02:00:00"}
                  // step="1"
                  // className="timeInp lessonInp"
                  className={styles.time}
                  placeholder={placholder}
                  {...register(`${regName}.${index}.start`)}
                />
                <div className="gic"></div>
                <input
                  type="time"
                  // defaultValue={"02:00:00"}
                  // step="1"
                  // className="timeInp lessonInp"
                  className={styles.time}
                  placeholder={placholder}
                  {...register(`${regName}.${index}.end`)}
                />
                <img
                  src={deleteIcon}
                  className="shrink-0 cursor-pointer w-5 h-10"
                  onClick={() => remove(index)}
                />
              </div>

              {/* {watch(regName)[index].end < watch(regName)[index].start &&
              watch(regName)[index].end != "" &&
              watch(regName)[index].start != "" ? (
                <div className="errorMessageGraffic">Դաշտը սխալ է լրացված</div>
              ) : (watch(regName).length >= 2 &&
                  watch(regName)[index].end == "") ||
                (watch(regName).length >= 2 &&
                  watch(regName)[index].start == "") ? (
                <div className="errorMessageGraffic">
                  Դաշտերը պետք է լրացնել
                </div>
              ) : null} */}
            </div>
          );
        })}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className="add"
          type="button"
          onClick={() => {
            // watch(regName)[count - 1]?.end == "" ||
            // watch(regName)[count - 1]?.start == ""
            //   ? console.log(watch(regName)[count - 1])
            //   : append({ start: "", end: "" });
            append({ start: "", end: "" });
          }}
        >
          <img src={buttonImg} />
        </button>
        <div className={styles.addText}>ավելացնել տարբերակ</div>
      </div>
    </div>
  );
};

// export default InputTime;
