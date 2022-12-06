import React, { SetStateAction } from "react";
import { useFormContext } from "react-hook-form";
import { Selects } from "../../lessons/newLesson/lessonCntBody/validationSchema";
interface OptionProps {
  option: string;
  state: boolean;
  setState: React.Dispatch<SetStateAction<boolean>>;
  regName?: Selects;
}

export const Option: React.FC<OptionProps> = ({
  option,
  state,
  setState,
  regName,
}) => {
  const { setValue } = useFormContext();
  return (
    <div
      className="custopSelect_option"
      onClick={() => {
        setState(!state);
        regName && setValue(regName, option, { shouldValidate: true });
      }}
    >
      {option}
    </div>
  );
};
