import { FC } from "react";
import {
  ArrayPath,
  FieldArrayWithId,
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayInsert,
  UseFieldArrayMove,
  UseFieldArrayPrepend,
  UseFieldArrayRemove,
  UseFieldArrayReplace,
  UseFieldArraySwap,
  UseFieldArrayUpdate,
  useFormContext,
} from "react-hook-form";
import buttonImg from "../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import deleteIcon from "../../../../assets/teacher_images/createGraffic/delete.svg";
import { UserSubmitForm2 } from "./CreateGraffic";
import styles from "./createGraffic.module.css";
interface InputProps {
  day: string;
  className?: string;
  placholder?: string;
  regName: string;
  count: number;
  fieldArray: UseFieldArrayReturn<UserSubmitForm2, "monday", "id">;
}
// type weekDay = "monday" | "tuesday" | "friday";
type UseFieldArrayReturn<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends ArrayPath<TFieldValues> = ArrayPath<TFieldValues>,
  TKeyName extends string = "id"
> = {
  swap: UseFieldArraySwap;
  move: UseFieldArrayMove;
  prepend: UseFieldArrayPrepend<TFieldValues, TFieldArrayName>;
  append: UseFieldArrayAppend<TFieldValues, TFieldArrayName>;
  remove: UseFieldArrayRemove;
  insert: UseFieldArrayInsert<TFieldValues, TFieldArrayName>;
  update: UseFieldArrayUpdate<TFieldValues, TFieldArrayName>;
  replace: UseFieldArrayReplace<TFieldValues, TFieldArrayName>;
  fields: FieldArrayWithId<TFieldValues, TFieldArrayName, TKeyName>[];
};
export const InputTime: FC<InputProps> = ({
  day,
  placholder,
  fieldArray,
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
        {fieldArray.fields.map(({ id }, index) => {
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
                  onClick={() => fieldArray.remove(index)}
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
            //   : fieldArray.append({ start: "", end: "" });
            fieldArray.append({ start: "", end: "" });
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
