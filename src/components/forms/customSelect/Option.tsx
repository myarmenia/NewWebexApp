import { FC } from "react";
import { useFormContext } from "react-hook-form";
import trashbinImg from "../../../assets/teacher_images/exam/delete.svg";
import { ICustomSelect } from "../../../models/interfaces";

interface OptionProps
  extends Pick<ICustomSelect, "toggleOptions" | "regName" | "setValue"> {
  optionId: number;
  option: string;
  removeOption?: (currentId: number) => void;
}

export const Option: FC<OptionProps> = ({
  toggleOptions,
  option,
  regName,
  removeOption,
  optionId,
  setValue,
}) => {
  const formMethods = useFormContext();
  return (
    <div className="custopSelect_option">
      <div
        className="custopSelect_option_text"
        onClick={() => {
          setValue?.(option);
          regName &&
            formMethods?.setValue(regName, option, { shouldValidate: true });
          toggleOptions();
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
