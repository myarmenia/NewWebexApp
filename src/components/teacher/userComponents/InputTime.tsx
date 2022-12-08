import React from "react";
import "./createGraffic.css";
import buttonImg from "../../../images/createGraffic/buttonimg.svg";
import { UseFieldArrayReturn, useFormContext } from "react-hook-form";
import { UserSubmitForm2 } from "./CreateGraffic";

interface InputProps {
  day: string;
  className?: string;
  placholder?: string;
  regName: string;
  fieldArray: UseFieldArrayReturn<UserSubmitForm2, any, "id">;
}

const InputTime: React.FC<InputProps> = ({
  day,
  placholder,
  fieldArray,
  regName,
}) => {
  const { register } = useFormContext();

  return (
    <div className="graffics">
      <p className="grafficsDay">{day}</p>
      <div className="grafficInput">
        {fieldArray.fields.map((el, index) => {
          return (
            <div className="grafficInputChild" key={el.id}>
              <input
                type="time"
                className="time"
                placeholder={placholder}
                {...register(`${regName}.${index}.start`)}
              />
              <div className="gic"></div>
              <input
                type="time"
                className="time"
                placeholder={placholder}
                {...register(`${regName}.${index}.end`)}
              />
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">
        <button
          className="add"
          onClick={() => {
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

export default InputTime;
