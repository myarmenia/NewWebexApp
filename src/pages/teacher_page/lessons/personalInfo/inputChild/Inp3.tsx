import React from "react";
import { useFormContext } from "react-hook-form";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import { CstmInput, CustomSelect } from "../../../../../components/forms";
import {
  inputChildProps,
  PersonalSubmitForm,
} from "../../../../../validations/teacherInfo_schema";
import "./inputChild.css";

export const Inp3: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PersonalSubmitForm>();

  return (
    <div className="inputChild">
      <div className="font-semibold text-gray text-sm">Կրթություն</div>
      {fieldArray.fields.map(({ id }, index) => {
        const select2Error =
          errors.education && errors.education[index]?.select2?.message;
        const statementError =
          errors.education && errors.education[index]?.statement?.message;
        const facultyError =
          errors.education && errors.education[index]?.faculty?.message;
        const professionError =
          errors.education && errors.education[index]?.profession?.message;
        return (
          <div className="inputChild2" key={id}>
            <CustomSelect
              placeholder="adsfdsf"
              regName={`${regName}.${index}.select2`}
              className="registration_select"
              options={["asas", "sadd", "asd", "klka"]}
              error={select2Error}
            />
            <CstmInput
              placeholder="Ուսումնական հաստատություն"
              regName={`${regName}.${index}.statement`}
              error={statementError}
            />
            <CstmInput
              placeholder="Ֆակուլտետ"
              regName={`${regName}.${index}.faculty`}
              error={facultyError}
            />
            <CstmInput
              placeholder="Մասնագիտություն"
              regName={`${regName}.${index}.profession`}
              error={professionError}
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
                  {...register(`education.${index}.start`)}
                />
                <div className="gic"></div>
                <input
                  type="date"
                  className="dateInp"
                  {...register(`education.${index}.end`)}
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className="buttonContainer">
        <button
          className="add"
          type="button"
          onClick={() => {
            fieldArray.append({
              select2: "",
              statement: "",
              faculty: "",
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
