import React from "react";
import buttonImg from "../../../../../assets/teacher_images/createGraffic/buttonimg.svg";
import { useFormContext } from "react-hook-form";
import { inputChildProps, PersonalSubmitForm } from "../InterfacePerson";
import "./inputChild.css";
import { CstmInput } from "../../../../../components/forms/cstmInput/CstmInput";

const Inp4: React.FC<inputChildProps> = ({ regName, fieldArray }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<PersonalSubmitForm>();

  return (
    <div className="inputChild">
      <div className="font-semibold text-gray text-sm">Լեզուներ</div>
      {fieldArray.fields.map(({ id }, index) => {
        const languagesError =
          errors.languages && errors.languages[index]?.languages?.message;
        return (
          <div className="inputChild2" key={id}>
            <CstmInput
              type="text"
              className="name "
              placeholder="Հայերեն"
              regName={`${regName}.${index}.language`}
              error={languagesError}
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

export default Inp4;
