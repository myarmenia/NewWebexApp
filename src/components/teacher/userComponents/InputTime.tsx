import React from "react";
import "./createGraffic.css";
import buttonImg from "../../../images/createGraffic/buttonimg.svg";
import deleteIcon from "../../../images/createGraffic/delete.svg";
import {
  FieldErrorsImpl,
  UseFieldArrayReturn,
  useFormContext,
} from "react-hook-form";
import { UserSubmitForm2 } from "./CreateGraffic";
import { isConstructorDeclaration } from "typescript";
import { log } from "console";

interface InputProps {
  day: string;
  className?: string;
  placholder?: string;
  regName: string;
  count: number;
  fieldArray: UseFieldArrayReturn<UserSubmitForm2, any, "id">;
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

const InputTime: React.FC<InputProps> = ({
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
  // {Array.isArray(watch(regName)) ? (
  //                 <div className="errorMessage">
  //                   {/* {errors.regName[index]?.end?.message ||
  //                     errors.regName[index]?.start?.message} */}
  //                 </div>
  //               ) : null}
  // console.log(watch());
  // console.log(fieldArray.remove());
  return (
    <div className="graffics">
      <p className="grafficsDay">{day}</p>
      <div className="grafficInput">
        {fieldArray.fields.map(({ id }, index) => {
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
              ? console.log("barev")
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

export default InputTime;
