import React from "react";
import "./inputChild.css";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import deleteImg from "../../../../../assets/teacher_images/discount/delete.svg";
import { useFormContext } from "react-hook-form";
import {
  inputChildProps,
  PersonalSubmitForm,
} from "../../../../../validations/teacherInfo_schema";
import { CstmInput } from "../../../../../components/forms";

export const Inp4: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
  const {
    formState: { errors },
  } = useFormContext<PersonalSubmitForm>();

  return (
    <div className="inputChild">
      <div className="font-semibold text-gray text-sm">Լեզուներ</div>
      {fieldArray.fields.map(({ id }, index) => {
        const languagesError =
          errors.languages && errors.languages[index]?.languages?.message;
        return (
          <div className="inputChild3" key={id}>
            <CstmInput
              className="name "
              placeholder="Հայերեն"
              regName={`${regName}.${index}.language`}
              error={languagesError}
            />
            <img
              src={deleteImg}
              className="deleteImg"
              onClick={() => fieldArray.remove(index)}
            />
          </div>
        );
      })}
      <div className="buttonContainer">
        <button className="add" type="button">
          <img
            src={buttonImg}
            onClick={() => {
              fieldArray.append({});
            }}
          />
        </button>
        <div className="addText">Ավելացնել</div>
      </div>
    </div>
  );
};
