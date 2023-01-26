import { FC } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import buttonImg from "../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import deleteIcon from "../../../../assets/teacher_images/createGraffic/delete.svg";
import styles from "./createGraffic.module.css";
interface InputProps {
  day: string;
  className?: string;
  placholder?: string;
  name: string;
}

export const InputTime: FC<InputProps> = ({ day, placholder, name }) => {
  const { register, control } = useFormContext();
  const { append, fields, remove } = useFieldArray({
    name,
    control,
  });
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
                  className={styles.time}
                  placeholder={placholder}
                  {...register(`${name}.${index}.start`)}
                />
                <div className="gic" />
                <input
                  type="time"
                  className={styles.time}
                  placeholder={placholder}
                  {...register(`${name}.${index}.end`)}
                />
                <img
                  src={deleteIcon}
                  className="shrink-0 cursor-pointer w-5 h-10"
                  onClick={() => remove(index)}
                />
              </div>

              {/* {watch(name)[index].end < watch(name)[index].start &&
              watch(name)[index].end != "" &&
              watch(name)[index].start != "" ? (
                <div className="errorMessageGraffic">Դաշտը սխալ է լրացված</div>
              ) : (watch(name).length >= 2 &&
                  watch(name)[index].end == "") ||
                (watch(name).length >= 2 &&
                  watch(name)[index].start == "") ? (
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
            // watch(name)[count - 1]?.end == "" ||
            // watch(name)[count - 1]?.start == ""
            //   ? console.log(watch(name)[count - 1])
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
