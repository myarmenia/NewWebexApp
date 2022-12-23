import React from "react";
import "./ageDiv.css";
import { useFormContext } from "react-hook-form";
import { CustomNmbInp } from "../../../../../../components/teacherComponents/customNmbInp/CustomNmbInp";

interface AgeDivProps {}

export const AgeDiv: React.FC<AgeDivProps> = ({}) => {
  const { register } = useFormContext();
  return (
    <div className="ageDiv">
      <div className="noAgeLimit">
        <span className="text-[#6B6B6B] text-xs">Տարիքային սահմանափակում</span>
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
