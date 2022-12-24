import React, { FC } from "react";
import arrowImg from "../../../../../../../assets/teacher_images/calendar/arrowLeft.svg";

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
