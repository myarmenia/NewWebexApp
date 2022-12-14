import React from "react";
import "./inputChild.css";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import { useFormContext } from "react-hook-form";
import {
  inputChildProps,
  PersonalSubmitForm,
} from "../../../../../validations/teacherInfo_schema";
import { CstmInput } from "../../../../../components/forms";

export const Inp5: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PersonalSubmitForm>();
  return (
    <div className="inputChild">
      <div className="font-semibold text-gray text-sm">Հավելյալ կրթություն</div>
      {fieldArray.fields.map(({ id }, index) => {
        const additionaleduError =
          errors.additionaledu && errors.additionaledu[index]?.name?.message;
        const companyError =
          errors.additionaledu && errors.additionaledu[index]?.company?.message;
        const proffesionError =
          errors.additionaledu &&
          errors.additionaledu[index]?.profession?.message;
        return (
          <div className="inputChild2" key={id}>
            <CstmInput
              placeholder="Դասընթացի անվանումը"
              regName={`${regName}.${index}.name`}
              error={additionaleduError}
            />
            <CstmInput
              placeholder="Դասընթացն անցկացնող կազմակերպություն"
              regName={`${regName}.${index}.company`}
              error={companyError}
            />
            <CstmInput
              regName={`${regName}.${index}.profession`}
              placeholder="Մասնագիտություն"
              error={proffesionError}
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
                  {...register(`additionaledu.${index}.start`)}
                />
                <div className="gic"></div>
                <input
                  type="date"
                  className="dateInp"
                  {...register(`additionaledu.${index}.end`)}
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
          type="button"
        >
          <img src={buttonImg} />
        </button>
        <div className="addText">Ավելացնել</div>
      </div>
    </div>
  );
};
