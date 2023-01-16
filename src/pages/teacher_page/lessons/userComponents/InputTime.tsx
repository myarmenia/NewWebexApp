import { FC } from "react";
import { UseFieldArrayReturn, useFormContext } from "react-hook-form";
import buttonImg from "../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import deleteIcon from "../../../../assets/teacher_images/createGraffic/delete.svg";
import { UserSubmitForm2 } from "./CreateGraffic";
import "./createGraffic.css";

interface InputProps {
  day: string;
  className?: string;
  placholder?: string;
  regName: string;
  count: number;
  fieldArray: UseFieldArrayReturn<UserSubmitForm2, any, "id">;
}

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
    <div className="graffics">
      <p className="grafficsDay">{day}</p>
      <div className="grafficInput">
        {fieldArray.fields.map(({ id }, index) => {
          return (
            <div key={id}>
              <div className="grafficInputChild">
                <input
                  type="time"
                  // defaultValue={"02:00:00"}
                  // step="1"
                  className="timeInp lessonInp"
                  placeholder={placholder}
                  {...register(`${regName}.${index}.start`)}
                />
                <div className="gic"></div>
                <input
                  type="time"
                  // defaultValue={"02:00:00"}
                  // step="1"
                  className="timeInp lessonInp"
                  placeholder={placholder}
                  {...register(`${regName}.${index}.end`)}
                />
                <img
                  src={deleteIcon}
                  className="shrink-0 cursor-pointer"
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
      <div className="buttonContainer">
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
        <div className="addText">ավելացնել տարբերակ</div>
      </div>
    </div>
  );
};

// export default InputTime;
