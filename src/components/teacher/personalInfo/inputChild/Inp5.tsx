import React from "react";
import { useFormContext } from "react-hook-form";
import buttonImg from "../../../../images/createGraffic/buttonimg.svg";
import { inputChildProps } from "../InterfacePerson";
import "./inputChild.css";

const Inp5: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="inputChild">
      <div className="infoName">Հավելյալ կրթություն</div>
      {fieldArray.fields.map(({ id }, index) => {
        return (
          <div className="inputChild2" key={id}>
            <input
              type="text"
              className="name "
              placeholder="Դասընթացի անվանումը"
              {...register(`${regName}.${index}.name`)}
            />
            <input
              type="text"
              className="name"
              placeholder="Դասընթացն անցկացնող կազմակերպություն"
              {...register(`${regName}.${index}.company`)}
            />
            <input
              type="text"
              className="name barevs"
              placeholder="Մասնագիտություն"
              {...register(`${regName}.${index}.proffesion`)}
            />

            <div className="dateValidation">
              <div className="checkbox">
                <div className="checkboxText">
                  Ուսումնառության ժամանակահատված
                </div>
              </div>
              <div className="date">
                <input
                  type="date"
                  className="dateInp"
                  {...register(`${regName}.${index}.start`)}
                />
                <div className="gic"></div>
                <input
                  type="date"
                  className="dateInp"
                  {...register(`${regName}.${index}.end`)}
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className="buttonContainer">
        <button
          className="add"
          onClick={() => {
            fieldArray.append({
              name: "",
              company: "",
              profession: "",
              start: "",
              end: "",
            });
          }}
        >
          <img src={buttonImg} />
        </button>
        <div className="addText">Ավելացնել</div>
      </div>
    </div>
  );
};

export default Inp5;
