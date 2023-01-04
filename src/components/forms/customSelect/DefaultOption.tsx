import { FC } from "react";
import { useFormContext } from "react-hook-form";
import chevDown from "../../../assets/general_images/customSelectArrow.svg";
import { ICustomSelect } from "../../../models/interfaces";

type DefaultOptionProps = Pick<
  ICustomSelect,
  "toggleOptions" | "regName" | "placeholder" | "value"
>;

export const DefaultOption: FC<DefaultOptionProps> = ({
  toggleOptions,
  regName,
  placeholder,
  value,
}) => {
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
