import React, { SetStateAction } from "react";
import { UseFormSetValue } from "react-hook-form";
// import { TeacherSubmitForm } from "../../../../models/interfaces";
import { Selects, TeacherSubmitForm } from "../lessonCntBody/validationSchema";
interface OptionProps {
  option: string;
  state: boolean;
  setState: React.Dispatch<SetStateAction<boolean>>;
  setValue?: UseFormSetValue<TeacherSubmitForm>;
  selectName?: Selects;
}

export const Option: React.FC<OptionProps> = ({
  option,
  state,
  setState,
  setValue,
  selectName,
}) => {
  return (
    <div
      className="custopSelect_option"
      onClick={() => {
        setState(!state);
        selectName && setValue?.(selectName, option, { shouldValidate: true });
      }}
    >
      {option}
    </div>
  );
};
