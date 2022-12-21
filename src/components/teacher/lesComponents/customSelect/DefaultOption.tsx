import React from "react";
import { useFormContext } from "react-hook-form";
import chevDown from "../../../../images/customSelectArrow.svg";

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
  const { register } = useFormContext();
  return (
    <div className="defaultOption" onClick={() => toggleOptions()}>
      <div className="flex text-[#6B6B6B] w-full text-xs">
        <input
          type="text"
          placeholder={placeholder}
          disabled
          className="myInput"
          {...register(regName!)}
        />
      </div>
      <img src={chevDown} alt="" className="w-3"/>
    </div>
  );
};
