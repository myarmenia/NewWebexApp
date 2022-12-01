import React from "react";
import "./ageDiv.css";
import { CustomNmbInp } from "../customNmbInp/CustomNmbInp";

export const AgeDiv: React.FC = () => {
  return (
    <div className="ageDiv">
      <div className="noAgeLimit">
        <span className="text-[#6B6B6B] text-xs">Տարիքային սահմանափակում</span>
        <div className="flex gap-2">
          <input type="checkbox" className="customCheckbox" />
          <span>Չկա</span>
        </div>
      </div>
      <div className="ageLimits">
        <CustomNmbInp min={16} max={100} defaultValue={16} />
        <hr className="w-[10px] bg-[#CCCCCC] h-[1.5px] rounded border-none" />
        <CustomNmbInp min={16} max={100} defaultValue={100} />
      </div>
    </div>
  );
};
