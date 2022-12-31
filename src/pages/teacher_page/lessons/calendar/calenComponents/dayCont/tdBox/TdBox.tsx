import React, { FC } from "react";
import "./tdBox.css";
import { IDateDay } from "../../../../../../../models/interfaces";

interface TdBoxProps extends IDateDay {
  className?: string;
}

export const TdBox: FC<TdBoxProps> = ({
  dayNumber,
  currentDayEvents,
  className,
  isCurrentMonth,
}) => {
  return (
    <td className={`tdBox1 ${className}`}>
      <div
        className={`CalendarCont2NumberBox ${
          !isCurrentMonth ? "opacity-40" : ""
        }`}
      >
        {dayNumber}
      </div>
      <div className="eventBox">
        {currentDayEvents?.map(({ time }) => (
          <div className="CalendarEventBox" key={Math.random()}>
            <div>Դասընթաց</div>
            <div>{time}</div>
          </div>
        ))}
      </div>
    </td>
  );
};
