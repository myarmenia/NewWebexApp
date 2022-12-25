import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import trashbinImg from "../../../assets/teacher_images/exam/delete.svg";
import { ICustomSelect } from "../../../models/interfaces";

type OptionProps = Pick<
  ICustomSelect,
  "toggleOptions" | "regName" | "option" | "removeOption" | "optionId"
>;

export const Option: FC<OptionProps> = ({
  toggleOptions,
  option,
  regName,
  removeOption,
  optionId,
}) => {
  const formMethods = useFormContext();
  return (
    <div className="custopSelect_option">
      <div
        className="custopSelect_option_text"
        onClick={() => {
          toggleOptions();
          regName &&
            formMethods?.setValue(regName, option, { shouldValidate: true });
        }}
      >
        {option}
      </div>
      {removeOption !== undefined && (
        <img
          className="py-3 px-4"
          src={trashbinImg}
          onClick={() => removeOption(optionId)}
          alt=""
        />
      )}
    </div>
  );
};
