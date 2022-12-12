import React from "react";
import { useFormContext } from "react-hook-form";
import buttonImg from "../../../../images/createGraffic/buttonimg.svg";
import { CustomSelect } from "../../lesComponents/customSelect/CustomSelect";
import { inputChildProps } from "../InterfacePerson";
import "./inputChild.css";

export const Inp2: React.FC<inputChildProps> = ({
  option,
  selectName,
  regName,
  fieldArray,
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="inputChild">
      <div className="infoName">Աշխատանքային փորձ</div>
      {fieldArray.fields.map(({ id }, index) => {
        return (
          <div className="inputChild2" key={id}>
            <input
              type="text"
              className="name "
              placeholder="Կազմակերպություն"
              {...register(`${regName}.${index}.company`)}
            />
            <CustomSelect
              regName={selectName}
              className="registration_select"
              select={{
                title: "sada",
                options: option,
              }}
            />
            <input
              type="text"
              className="name "
              placeholder="Պաշտոն"
              {...register(`${regName}.${index}.position`)}
            />

            <div className="dateValidation">
              <div className="checkbox">
                <div className="checkboxText">Ժամանակահատված</div>
                <div className="checkboxChild">
                  <input
                    type="checkbox"
                    {...register(`${regName}.${index}.acceptTerms`)}
                  />
                  <div className="clickText">ներկայումս</div>
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

            <textarea
              className="textarea"
              placeholder="Աշխատանքի նկարագրություն"
              {...register(`${regName}.${index}.description`)}
            ></textarea>
          </div>
        );
      })}
      <div className="buttonContainer">
        <button
          className="add"
          onClick={() => {
            fieldArray.append({
              select: "",
              company: "",
              position: "",
              acceptTerms: false,
              start: "",
              end: "",
              description: "",
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
