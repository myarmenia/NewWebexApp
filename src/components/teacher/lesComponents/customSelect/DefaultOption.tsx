import React from "react";
import { useFormContext } from "react-hook-form";
import chevDown from "../../../../images/chevDown.svg";

interface DefaultOptionProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
  regName?: string;
}
export const DefaultOption: React.FC<DefaultOptionProps> = ({
  setState,
  state,
  regName,
}) => {
  const { register } = useFormContext();
  return (
    <div className="defaultOption" onClick={() => setState(!state)}>
      <div className="flex text-[#6B6B6B] w-full text-xs">
        <input
          type="text"
          placeholder="Ընտրել կատեգորիան*"
          disabled
          className="myInput"
          {...register(regName!)}
        />
      </div>
      <img
        src={chevDown}
        alt=""
        className={`scale-75 duration-300 h-fit ${
          state ? "rotate-180" : "rotate-0"
        }`}
      />
    </div>
  );
};
