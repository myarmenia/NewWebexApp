import React from "react";
import { useFormContext } from "react-hook-form";
import chevDown from "../../../assets/general_images/customSelectArrow.svg";

interface DefaultOptionProps {
  toggleOptions: () => void;
  regName?: string;
  placeholder?: string;
}
export const DefaultOption: React.FC<DefaultOptionProps> = ({
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
