import { FC } from "react";
import arrowImg from "../../../../../../assets/teacher_images/calendar/arrowLeft.svg";

interface ToggleMonthProps {
  toggleMonth: () => void;
  className?: string;
}

export const ToggleMonth: FC<ToggleMonthProps> = ({
  toggleMonth,
  className = "",
}) => {
  return (
    <img
      src={arrowImg}
      className={"w-2 h-[14px] cursor-pointer " + className}
      alt=""
      onClick={toggleMonth}
    />
  );
};
