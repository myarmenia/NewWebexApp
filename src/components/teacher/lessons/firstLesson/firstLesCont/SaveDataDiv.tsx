import React from "react";
import acceptImg from "../../../../../images/Teacher/NewLesson/acceptPurple.svg";

interface SaveDataDivProps {}

export const SaveDataDiv: React.FC<SaveDataDivProps> = () => {
  return (
    <div className="flex gap-1">
      <img src={acceptImg} alt="" />
      <span className="textPurple textUnderline">Պահպանել</span>
    </div>
  );
};
