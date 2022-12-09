import React, { FC } from "react";
import arrowImg from "../../../../../../../images/Teacher/Calendar/arrowLeft.svg";

interface ToggleMonthProps {
  toggleMonth: () => void;
  className?: string;
}

export const ToggleMonth: FC<ToggleMonthProps> = ({
  toggleMonth,
  className,
}) => {
  return (
    <img
      src={arrowImg}
      className={"arrow " + className}
      alt=""
      onClick={toggleMonth}
    />
  );
};
