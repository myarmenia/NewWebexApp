import React, { FC } from "react";
import chevDown from "../../../assets/general_images/customSelectArrow.svg";
import { useFormContext } from "react-hook-form";
import { ICustomSelect } from "../../../models/interfaces";

type DefaultOptionProps = Pick<
  ICustomSelect,
  "toggleOptions" | "regName" | "placeholder"
>;

export const DefaultOption: FC<DefaultOptionProps> = ({
  toggleOptions,
  regName,
  placeholder,
}) => {
  const formMethods = useFormContext();
  return (
    <div className="defaultOption" onClick={() => toggleOptions()}>
      <div className="flex text-gray w-full text-xs">
        <input
          type="text"
          placeholder={placeholder}
          disabled
          className="myInput"
          {...formMethods?.register(regName!)}
        />
      </div>
      <img src={chevDown} alt="" className="w-3" />
    </div>
  );
};
