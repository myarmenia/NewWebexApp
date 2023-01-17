import { FC } from "react";
import { useFormContext } from "react-hook-form";
import chevDown from "../../../assets/general_images/customSelectArrow.svg";
import { useSelectContext } from "./CustomSelect";

export const DefaultOption: FC = () => {
  const { toggleOptions, regName, placeholder, value } = useSelectContext();
  const formMethods = useFormContext();
  const register = regName && formMethods?.register(regName);
  return (
    <div className="defaultOption" onClick={() => toggleOptions()}>
      <div className="flex text-gray w-full text-xs">
        <input
          {...register}
          type="text"
          {...{ placeholder }}
          disabled
          className="myInput"
          value={value}
        />
      </div>
      <img src={chevDown} alt="" className="w-3" />
    </div>
  );
};
