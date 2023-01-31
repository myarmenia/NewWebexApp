import { FC, MouseEventHandler } from "react";
import arrowImg from "../../../../../../assets/teacher_images/calendar/arrowLeft.svg";

interface ToggleMonthProps {
  toggleMonth: MouseEventHandler<HTMLImageElement>;
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
