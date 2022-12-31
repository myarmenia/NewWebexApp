import React from "react";
import { useFormContext } from "react-hook-form";
import { CustomNmbInp } from "../../../../../../components/forms/customNmbInp/CustomNmbInp";
import "./ageDiv.css";

interface AgeDivProps {}

export const AgeDiv: React.FC<AgeDivProps> = ({}) => {
    const { register } = useFormContext();
  return (
    <div className="ageDiv">
      <div className="noAgeLimit">
        <span className="text-gray text-xs">Տարիքային սահմանափակում</span>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="customCheckbox"
            {...register("isAgeLimit")}
          />
          <span>Չկա</span>
        </div>
      </div>
      <div className="ageLimits">
        <CustomNmbInp defaultValue={16} regName="minAgeLimit" />
        <hr className="w-[10px] bg-[#CCCCCC] h-[1.5px] rounded border-none" />
        <CustomNmbInp defaultValue={99} regName="maxAgeLimit" />
      </div>
    </div>
  );
};
