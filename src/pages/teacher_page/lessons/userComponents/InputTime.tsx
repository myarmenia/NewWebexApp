import React from "react";
import "./createGraffic.css";
import buttonImg from "../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import deleteIcon from "../../../../assets/teacher_images/createGraffic/delete.svg";
import {
  FieldErrorsImpl,
  UseFieldArrayReturn,
  useFormContext,
  useFieldArray,
} from "react-hook-form";
import { UserSubmitForm2 } from "./CreateGraffic";

type ISome =
  | "monday"
  | "tuesday"
  | "thursday"
  | "wednesday"
  | "friday"
  | "saturday"
  | "sunday";

interface InputProps {
  day: string;
  className?: string;
  placholder?: string;
  regName: string;
  count: number;
  fieldArray: UseFieldArrayReturn<UserSubmitForm2, any, "id">;
  // fieldArray: UseFieldArrayReturn<UserSubmitForm2, ISome, "id">;
}
interface YupProps {
  start: string;
  end: string;
}
export interface IErrorsForm {
  monday?: YupProps[];
  tuesday?: YupProps[];
  thursday?: YupProps[];
  wednesday?: YupProps[];
  friday?: YupProps[];
  saturday?: YupProps[];
  sunday?: YupProps[];
}

export const InputTime: React.FC<InputProps> = ({
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

  const newFieldArray: UseFieldArrayReturn<
    UserSubmitForm2,
    keyof UserSubmitForm2,
    "id"
  > = fieldArray;

  return (
    <div className="graffics">
      <p className="grafficsDay">{day}</p>
      <div className="grafficInput">
        {newFieldArray.fields.map(({ id }, index) => {
          return (
            <div className="grafficInputChild" key={id}>
              <>
                <input
                  type="text"
                  className="time"
                  placeholder={placholder}
                  {...register(`${regName}.${index}.start`)}
                />
                <div className="gic"></div>
                <input
                  type="text"
                  className="time"
                  placeholder={placholder}
                  {...register(`${regName}.${index}.end`)}
                />
                <button
                  className="removeInput"
                  onClick={() => fieldArray.remove(index)}
                >
                  <img src={deleteIcon} />
                </button>
                {watch(regName)[index].end < watch(regName)[index].start &&
                watch(regName)[index].end != "" &&
                watch(regName)[index].start != "" ? (
                  <div className="errorMessageGraffic">
                    Դաշտը սխալ է լրացված
                  </div>
                ) : (watch(regName).length >= 2 &&
                    watch(regName)[index].end == "") ||
                  (watch(regName).length >= 2 &&
                    watch(regName)[index].start == "") ? (
                  <div className="errorMessageGraffic">
                    Դաշտերը պետք է լրացնել
                  </div>
                ) : null}
              </>
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">
        <button
          className="add"
          onClick={() => {
            watch(regName)[count - 1]?.end == "" ||
            watch(regName)[count - 1]?.start == ""
              ? console.log()
              : fieldArray.append({ start: "", end: "" });
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
